'use strict';

fcSocialApp.factory('AuthServerProvider', function loginService($http, StorageService, Base64, SERVER_URL, SERVER_PORT) {
        return {
            login: function(credentials) {
                var data = "username=" +  encodeURIComponent(credentials.username) + "&password="
                    + encodeURIComponent(credentials.password) + "&grant_type=password&scope=read%20write&" +
                    "client_secret=mySecretOAuthSecret&client_id=fanClubSocialapp";
                return $http.post(SERVER_URL + ':' + SERVER_PORT + '/oauth/token', data, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Accept": "application/json",
                        "Authorization": "Basic " + Base64.encode("fanClubSocialapp" + ':' + "mySecretOAuthSecret")
                    }
                }).success(function (response) {
                    var expiredAt = new Date();
                    expiredAt.setSeconds(expiredAt.getSeconds() + response.expires_in);
                    response.expires_at = expiredAt.getTime();
                    StorageService.save('token', response);
                    return response;
                });
            },
            logout: function() {
                // logout from the server
                $http.post(SERVER_URL + ':' + SERVER_PORT + '/api/logout').then(function() {
                    StorageService.clearAll();
                });
            },
            getToken: function () {
                return StorageService.get('token');
            },
            hasValidToken: function () {
                var token = this.getToken();
                return token && token.expires_at && token.expires_at > new Date().getTime();
            }
        };
    });
