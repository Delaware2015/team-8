'use strict';

/**
 * @ngdoc function
 * @name gwJpmc8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gwJpmc8App
 */
angular.module('gwJpmc8App')
  .controller('MainCtrl', function ($scope) {

  	function Dress() {
  		
  	}

  	function Bottoms(){

  	}
  	function Top() {

  	}

  	function Shoes() {

  	}
  	
  	$scope.laundreyList = [];


  	$scope.addDress() {
  		$scope.laundreyList.push(new Dress());
  	}

  	$scope.addBottoms() {
  		$scope.laundreyList.push(new Bottoms);
  	}

  	$scope.addTop() {
  		$scope.laundreyList.push(new Top);
  	}

  	$scope.addShoes() {
  		$scope.laundreyList.push(new Shoes);
  	}

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
