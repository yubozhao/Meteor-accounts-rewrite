Meteor.loginWithGoogle = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Google.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithGoogle = function (options, callback) {
	var credentialRequestCompleteCallback = Accounts.oauth.linkRequestCompleteHandler(callback);
	Google.requestCredential(options, credentialRequestCompleteCallback);
};