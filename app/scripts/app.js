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
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl',
        controllerAs: 'splash'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'about'
      })
<<<<<<< HEAD
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'MainCtrl',
        controllerAs: 'user'
=======
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
>>>>>>> 72e120ef8d4a8a7b3245dcfe7f2b193339932d19
      })
      .otherwise({
        redirectTo: '/'
      });
  });
