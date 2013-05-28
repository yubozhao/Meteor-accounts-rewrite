Meteor.loginWithGithub = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Github.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithGithub = function (options, callback) {
	var credentialRequestCompleteCallback = Accounts.oauth.linkRequestCompleteHandler(callback);
	Github.requestCredential(options, credentialRequestCompleteCallback);
};