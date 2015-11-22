'use strict';

fcSocialApp.factory('Fixture', function ($resource, SERVER_URL, SERVER_PORT, DateUtils) {
        return $resource(SERVER_URL + ':' + SERVER_PORT +'/api/fixtures/:id', {}, {
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
