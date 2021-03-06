import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse (store, primaryModelClass, payload, id, requestType) {

		const convertToBoolean = string => string.toLowerCase() === 'yes' ? true : false;

		if (requestType === 'findRecord') {
			payload = {
				article: payload.map(article => {
					return {
						id: 				article.articleID,
						articleID: 			article.articleID,
						image: 				article.articleImage,
						title: 				article.articleTitle,
						body: 				article.articleDescription,
						allowComment: 		convertToBoolean(article.articleAllowComment),
						allowGallery: 		convertToBoolean(article.articleAllowGallery),
						allowSubmission: 	convertToBoolean(article.articleAllowSubmission),
						allowVoting: 		convertToBoolean(article.articleAllowUpvoting),
						dateEndVoting: 		article.articleEndVotingDate,
						dateExpire: 		article.articleExpireDate,
						dateCreated: 		article.createdAt,
						dateUpdated: 		article.updatedAt,
						rules: 				article.articleRules,
						dateStart: 			article.articleStartDate,
						status: 			article.articleStatus,
						submissionType: 	article.articleSubmissionType,
						userID: 			article.userID,
						tag: 				article.articleTags,
						url: 				`http://8thmind.com/article/${article.articleID}`,
						links: {
							submissions: `/articles/${article.articleID}/submissions/`
						}
					};
				})[0]
			};
		}
		else if (requestType === 'deleteRecord') {
			console.log('@@@@ Serializer handle delete record');
		}
		else {
			// console.log('@@@@ Noramalizing ',requestType,' payload: ',payload);
			payload = {
				articles: (payload.result || []).map(article => {
					return {
						id: 		article.articleID,
						body: 		article.articleDescription,
						articleID: 	article.articleID,
						image: 		article.articleImage,
						dateStart: 	article.articleStartDate,
						tag: 		article.articleTags,
						title: 		article.articleTitle,
						firstName: 	article.userFirstName,
						lastName: 	article.userLastName,
						url: 				`http://8thmind.com/article/${article.articleID}`,
						links: {
							submissions: `/articles/${article.articleID}/submissions/`
						}
					};
				})
			};
		}
		// console.log(`Payload for requestType: ${requestType}`, payload)
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});
