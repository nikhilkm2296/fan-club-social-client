'use strict';

fcSocialApp.factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });

fcSocialApp.factory('PasswordResetInit', function ($resource) {
        return $resource('api/account/reset_password/init', {}, {
        })
    });

fcSocialApp.factory('PasswordResetFinish', function ($resource) {
        return $resource('api/account/reset_password/finish', {}, {
        })
    });
