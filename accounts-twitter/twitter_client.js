Meteor.loginWithTwitter = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Twitter.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithTwitter = function (options, callback) {
	console.log("BOO requesting link");
	var credentialRequestCompleteCallback = Accounts.oauth.linkRequestCompleteHandler(callback);
	Twitter.requestCredential(options, credentialRequestCompleteCallback);
};