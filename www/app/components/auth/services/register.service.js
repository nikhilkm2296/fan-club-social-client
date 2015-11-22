'use strict';

fcSocialApp.factory('Register', function ($resource, SERVER_URL, SERVER_PORT) {
        return $resource( SERVER_URL + ':' + SERVER_PORT + '/api/register', {}, {
        });
    });


