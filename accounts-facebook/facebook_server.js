Accounts.oauth.registerService('facebook');

Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on
  // localhost). https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/,
  // "Sharing of Access Tokens"
  forLoggedInUser: ['services.facebook'],
  forOtherUsers: [
    // https://www.facebook.com/help/167709519956542
    'services.facebook.id', 'services.facebook.username', 'services.facebook.gender'
  ]
});

Accounts.registerLinkCheckUpHandler("facebook", function(user, serviceData) {
	console.log("BOO its inside facebook!", user, ' ', serviceData);
  if (user.services.facebook.id == serviceData.id) {
    //BOO same user, we can update his info.
    return true;
  } else {
    //BOO this should be how we handle the multiply accounts link to same Meteor user.
  };

	return undefined;
});