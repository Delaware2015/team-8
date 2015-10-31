'use strict';

/**
 * @ngdoc service
 * @name gwJpmc8App.user
 * @description
 * # user
 * Factory in the gwJpmc8App.
 */
angular.module('gwJpmc8App')
  .factory('user', function($http) {
    $http({
      method: 'GET',
      url: 'ec2-23-23-54-42.compute-1.amazonaws.com:8080/User'
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    return {
      someMethod: function() {
        return response;
      }
    };
  });