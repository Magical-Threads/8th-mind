let mocha = require('mocha');
let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let db = require('../db');
let Article = require('../models/article');
let User = require('../models/user');

let test_user = {
  userFirstName: 'Fred',
  userLastName: 'Flintstone',
  userEmail: 'fred@bedrock.net'
};

describe('Article', function() {
  before(async function() {
    await new Promise((resolve, reject) => {
      db.query("DELETE FROM users WHERE userEmail = ?", test_user.userEmail,
        (err, users, fields) => {
        expect(err).to.not.exist;
        resolve();
      });
    });
    let u = await User.register(test_user.userFirstName, test_user.userLastName,
      test_user.userEmail, 'wilma');
    await User.validate_email(u.emailConfirmationToken);
  });
  beforeEach(async function() {
    await new Promise((resolve, reject) => {
      db.query("DELETE FROM article_submission WHERE title = 'TESTING'",
        (err, results) => {
        expect(err).to.not.exist;
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      db.query("DELETE FROM article_submission_asset WHERE caption = 'TESTING'",
        (err, results) => {
        expect(err).to.not.exist;
        resolve();
      });
    });
  });
  describe('basic access', function() {
    it('can return a count for all articles', async function() {
      // The below assumes the current test data, new test data will require changes
      expect(await Article.count()).to.equal(33);
    });
    it('can return a count for articles with a tag', async function() {
      // The below assumes the current test data, new test data will require changes
      expect(await Article.count('test')).to.equal(0);
      expect(await Article.count('Article')).to.equal(16);
      expect(await Article.count('Articles')).to.equal(1);
      expect(await Article.count('Challenge')).to.equal(1);
      expect(await Article.count('Create')).to.equal(15);
    });
    it('can return the list of all tags in use', async function() {
      // The below assumes the current test data, new test data will require changes
      expect(await Article.all_tags()).to.deep.equal([
        'Article', 'Articles', 'Challenge', 'Create'
      ]);
    });
  });
})
