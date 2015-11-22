'use strict';

fcSocialApp.factory('Feed', function ($resource, DateUtils, SERVER_URL, SERVER_PORT) {
        return $resource(SERVER_URL + ':' + SERVER_PORT + '/api/feeds/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
