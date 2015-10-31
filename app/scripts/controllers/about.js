'use strict';

/**
 * @ngdoc function
 * @name gwJpmc8App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gwJpmc8App
 */
angular.module('gwJpmc8App')
  .controller('AboutCtrl', function ($scope, $user) {
    $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }
};
  });
