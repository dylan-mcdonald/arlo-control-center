app.service("LoginService", function($http) {
	this.LOGIN_ENDPOINT = "/lib/php/ng-ad-authenticate.php";

	this.login = function(loginData) {
		return ($http.post(this.LOGIN_ENDPOINT, loginData)
			.then(function(reply) {
				return (reply);
			}));
	};
});