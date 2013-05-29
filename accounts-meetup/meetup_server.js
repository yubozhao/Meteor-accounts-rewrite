Accounts.oauth.registerService('meetup');

Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on
  // localhost). http://www.meetup.com/meetup_api/auth/#oauth2implicit
  forLoggedInUser: ['services.meetup'],
  forOtherUsers: ['services.meetup.id']
});

Accounts.registerLinkCheckUpHandler("meetup", function(user, serviceData) {
	console.log("BOO its inside meetup!", user, ' ', serviceData);
	return undefined;
});