'use strict';

/**
 * @ngdoc function
 * @name gwJpmc8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gwJpmc8App
 */
angular.module('gwJpmc8App')
	.controller('MainCtrl', function($scope, user, $http) {
		var dress = "dress";
		var i = 1;

		

		
		

		$scope.laundreyList = [];


		$scope.addDress = function() {

			
			$scope.laundreyList.push("dress" + i++);
			console.log("dress added");
			console.log($scope.laundreyList);
		}

		$scope.addBottoms = function() {
			
			$scope.laundreyList.push("Bottoms" + i++);
		}

		$scope.addTop = function() {
			
			$scope.laundreyList.push("Top" + i++);
		}

		$scope.addShoes = function() {
			
			$scope.laundreyList.push("Shoes" + i++);
		}
		console.log("testing");

		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		
		})
