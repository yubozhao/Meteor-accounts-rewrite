if (!Accounts.twitter) {
  Accounts.twitter = {};
}
// BOO This all needs to be changed to be off of ExternalService
Accounts.twitter._urls = {
  requestToken: "https://api.twitter.com/oauth/request_token",
  authorize: "https://api.twitter.com/oauth/authorize",
  accessToken: "https://api.twitter.com/oauth/access_token",
  authenticate: "https://api.twitter.com/oauth/authenticate"
};
