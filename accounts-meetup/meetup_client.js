Meteor.loginWithMeetup = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Meetup.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithMeetup = function (options, callback) {
	var credentialRequestCompleteCallback = Accounts.oauth.linkRequestCompleteHandler(callback);
	Meetup.requestCredential(options, credentialRequestCompleteCallback);
};