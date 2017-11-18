let mocha = require('mocha');
let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let db = require('../db');
let Article = require('../models/article');
let User = require('../models/user');
let Submission = require('../models/submission');

let test_user = {
  userFirstName: 'Fred',
  userLastName: 'Flintstone',
  userEmail: 'fred@bedrock.net'
};

describe('article routes', function() {
  describe('basic access', function() {
    // it('should allow an article to be created');
    // it('should allow an article to be deleted');
    it('should be able to return the list of articles', async function () {
      await chai.request(a)
      .get('/articles')
      .then(async (res) => {
        expect(res).to.exist;
        expect(res.status).to.equal(200);
        expect(res.body.result).to.exist;
        // for (let a of res.body.result) {
        //   console.log('@@@@ Article ',a.articleID, a.userFirstName,
        //     a.userLastName, a.articleTitle, a.articleAllowSubmission);
        // }
        expect(res.body.pagination).to.exist;
        let pagination = res.body.pagination[0];
        expect(res.body.result.length).to.equal(Math.min(pagination.per_page, pagination.total));
        expect(pagination.total_pages).to.equal(pagination.total / pagination.per_page);
      });
    });
    // it('should be able to return the details of an article', async function() {
    //   await chai.request(a)
    //   .get('/article/53')
    //   .then(async (res) => {
    //     expect(res).to.exist;
    //     expect(res.status).to.equal(200);
    //     console.log('@@@@ Result: ',res.body);
    //     expect(res.body.articleID).to.equal(53);
    //     expect(res.body.userFirstName).to.equal('Blaze');
    //     expect(res.body.userLastName).to.equal('Hilario');
    //     expect(res.body.articleAllowSubmissions).to.equal('No');
    //     expect(res.body.articleTitle).to.equal('8 Ways Creators Can Beat Procrastination');
    //   });
    // });
    it('should be able to return articles matching a specific tag', async function() {
      for (tag of await Article.all_tags()) {
        await chai.request(a)
        .get('/articles')
        .query({tag:tag})
        .then(async (res) => {
          expect(res).to.exist;
          expect(res.status).to.equal(200);
          expect(res.body.result).to.exist;
          expect(res.body.pagination).to.exist;
          let pagination = res.body.pagination[0];
          expect(res.body.result.length).to.equal(Math.min(pagination.per_page, pagination.total));
          expect(pagination.total_pages).to.equal(pagination.total / pagination.per_page);
        });
      }
    });
  });

  describe('submission routes', function() {
    before(async function() {
      await new Promise((resolve, reject) => {
        db.query("DELETE FROM users WHERE userEmail = ?", test_user.userEmail,
          (err, users, fields) => {
          expect(err).to.not.exist;
          resolve();
        });
      });
      await new Promise((resolve, reject) => {
        db.query("DELETE FROM article_submissions WHERE submissionTitle = 'TESTING'",
          (err, results) => {
          expect(err).to.not.exist;
          resolve();
        });
      });
      let u = await User.register(test_user.userFirstName, test_user.userLastName,
        test_user.userEmail, 'wilma');
      await User.validate_email(u.emailConfirmationToken);
    });
    it('should allow submissions to be created for an article, if such is enabled', async function() {
      let article = await (new Article(53)).load();
      await article.enable_submissions();
      let u = await User.login(test_user.userEmail, 'wilma');
      await chai.request(a)
      .post('/articles/53/submissions/new')
      .set('authorization', u.token)
      .send({submissionTitle: "TESTING"})
      .then(async (res) => {
        expect(res.status).to.equal(200);
        let sub = await article.submission_for_user(u);
        expect(sub).to.exist;
        expect(sub.submissionTitle).to.exist;
        expect(sub.submissionTitle).to.equal('TESTING');
      })
    });
    it('should not allow submissions to be created for an article, if such is disabled', async function() {
      let article = await (new Article(53)).load();
      await article.disable_submissions();
      let u = await User.login(test_user.userEmail, 'wilma');
      await chai.request(a)
      .post('/articles/53/submissions/new')
      .set('authorization', u.token)
      .send({submissionTitle: "TESTING"})
      .then(async (res) => {
        expect(res.status).to.not.equal(200);
      })
      .catch(async (err) => {
        expect(err.response).to.exist;
        expect(err.response.status).to.equal(422);
      })
    });
    it('should not allow submissions to be created for an article, if user is not logged in', async function() {
      let article = await (new Article(53)).load();
      await article.disable_submissions();
      await chai.request(a)
      .post('/articles/53/submissions/new')
      .send({submissionTitle: "TESTING"})
      .then(async (res) => {
        expect(res.status).to.not.equal(200);
      })
      .catch(async (err) => {
        expect(err.response).to.exist;
        expect(err.response.status).to.equal(401);
      })
    });
    it('should not allow submissions to be created for an article, if user already has a submission', async function() {
      let u = await User.login(test_user.userEmail, 'wilma');
      let article = await (new Article(53)).load();
      await article.enable_submissions();
      let sub = new Submission(-1);
      sub.set({
        submissionTitle: 'TESTING',
        submissionContent: '',
        createdAt: new Date(),
        articleID: article.id, userID: u.id})
      await sub.create();
      await chai.request(a)
      .post('/articles/53/submissions/new')
      .set('authorization', u.token)
      .send({submissionTitle: "TESTING"})
      .then(async (res) => {
        expect(res.status).to.not.equal(200);
      })
      .catch(async (err) => {
        expect(err.response).to.exist;
        expect(err.response.status).to.equal(422);
      })
    });
    it('should be able to return a list of submissions for an article');
    it('should be able to return details of a submission for an article');

    describe('asset routes', function() {
      it('should be able to add assets to a submission');
      it('should be able to remove assets from a submission');
      it('should be able to list the assets for a submission');
      it('should be able to return details of an asset for a submission');
    });
  });
});
