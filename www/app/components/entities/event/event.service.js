'use strict';

fcSocialApp.factory('Event', function ($resource, DateUtils, SERVER_URL, SERVER_PORT) {
        return $resource(SERVER_URL + ':' + SERVER_PORT + '/api/events/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.eventDate = DateUtils.convertDateTimeFromServer(data.eventDate);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
