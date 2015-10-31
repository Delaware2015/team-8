'use strict';

/**
 * @ngdoc function
 * @name gwJpmc8App.controller:FacebookcontrolCtrl
 * @description
 * # FacebookcontrolCtrl
 * Controller of the gwJpmc8App
 */
angular.module('gwJpmc8App')
  .controller('FacebookcontrolCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    js.src = '//connect.facebook.net/en_US/sdk.js'

    $window.fbAsyncInit = function () {
    	FB.init({
    		appId: '{your-app-id}',
    		status: true,
    		cookie: true,
    		xfbml: true,
    		version: 'v2.4'
    	});
    };
    
  });

