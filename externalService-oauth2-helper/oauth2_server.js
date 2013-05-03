// connect middleware
ExternalService.oauth2._handleRequest = function (service, query, res) {
  // check if user authorized access
  if (!query.error) {
    // Prepare the login results before returning.  This way the
    // subsequent call to the `login` method will be immediate.

    // Run service-specific handler.
    var oauthResult = service.handleOauthRequest(query);

    console.log("BOO inside oauth2 handlerequest", query);
    // Get or create user doc and login token for reconnect.
    ExternalService.oauth._loginResultForState[query.state] =
      Accounts.updateOrCreateUserFromExternalService(
        service.serviceName, oauthResult.serviceData, oauthResult.options);
  }

  // Either close the window, redirect, or render nothing
  // if all else fails
  ExternalService.oauth._renderOauthResults(res, query);
};
