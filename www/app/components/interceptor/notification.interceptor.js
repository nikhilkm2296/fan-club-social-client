 'use strict';

fcSocialApp.factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-fcSocialServerApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-fcSocialServerApp-params')});
                }
                return response;
            }
        };
    });
