'use strict';

/**
 * @ngdoc service
 * @name gwJpmc8App.parseWrapper
 * @description
 * # parseWrapper
 * Factory in the gwJpmc8App.
 */
angular.module('gwJpmc8App')
  .factory('parseWrapper', function () {
    Parse.initialize("P5HiiYRR1ybbZvwnKuGeXbJ3MPSq5IOIlKNnbND6", 
      "iPKsqYSDaaQTMPzEwkEwZn0uXOoNOYtgLcMF3OfC");
    console.log("test");
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
