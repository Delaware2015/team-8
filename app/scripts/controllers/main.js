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


  	$scope.addDress = function () {
  		$scope.laundreyList.push(new Dress());
  		console.log("dress added");
  		console.log($scope.laundreyList);
  	}

  	$scope.addBottoms = function () {
  		$scope.laundreyList.push(new Bottoms);
  	}

  	$scope.addTop = function() {
  		$scope.laundreyList.push(new Top);
  	}

  	$scope.addShoes = function() {
  		$scope.laundreyList.push(new Shoes);
  	}
  	console.log("testing");

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
