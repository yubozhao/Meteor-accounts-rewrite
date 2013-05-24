Meteor.loginWithFacebook = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Facebook.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithFacebook = function (options, callback) {
	console.log("BOO requesting link");
	var credentialRequestCompleteCallback = Accounts.oauth.linkRequestCompleteHandler(callback);
	Facebook.requestCredential(options, credentialRequestCompleteCallback);
};