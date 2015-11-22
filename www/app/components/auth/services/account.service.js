'use strict';

fcSocialApp.factory('Account', function Account($resource, SERVER_URL, SERVER_PORT) {
        return $resource(SERVER_URL + ':' + SERVER_PORT + '/api/account', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });
    });
