Meteor.loginWithWeibo = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Weibo.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithWeibo = function (options, callback) {
	var credentialRequestCompleteCallback = Accounts.oauth.linkRequestCompleteHandler(callback);
	Weibo.requestCredential(options, credentialRequestCompleteCallback);
};