'use strict';

/**
 * @ngdoc overview
 * @name gwJpmc8App
 * @description
 * # gwJpmc8App
 *
 * Main module of the application.
 */
angular
  .module('gwJpmc8App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'about'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'MainCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
