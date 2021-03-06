'use strict';

app.factory('file', ['$resource', 'BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.URL + '/api/v1/file/get/:id',
        {
            id:'@id'
        },
        {
            geFile: {
                method: 'GET'
            }
        });

    return ENDPOINT;
}]);