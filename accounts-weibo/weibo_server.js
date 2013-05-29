Accounts.oauth.registerService('weibo');

Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on localhost)
  forLoggedInUser: ['services.weibo'],
  forOtherUsers: ['services.weibo.screenName']
});

Accounts.registerLinkCheckUpHandler("weibo", function(user, serviceData) {
	console.log("BOO its inside weibo!", user, ' ', serviceData);
	return undefined;
});