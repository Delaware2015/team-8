'use strict';

/**
 * @ngdoc function
 * @name gwJpmc8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gwJpmc8App
 */
angular.module('gwJpmc8App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    for(var i=1; i<=24; i++){
	    var select = document.getElementById("hours");
	    var option = document.createElement("OPTION");
		select.options.add(option);
		option.text = i;
		option.value = i;
	}
	
  });
