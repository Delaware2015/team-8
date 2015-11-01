'use strict';

/**
 * @ngdoc function
 * @name gwJpmc8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gwJpmc8App
 */
angular.module('gwJpmc8App')
<<<<<<< HEAD
	.controller('MainCtrl', function($scope, user, $http) {
		var dress = "dress";

		
		

		$scope.laundreyList = [];


		$scope.addDress = function() {
			
			var i = 1;
			$scope.laundreyList.push("dress" + i++);
			console.log("dress added");
			console.log($scope.laundreyList);
		}

		$scope.addBottoms = function() {
			var i = 1;
			$scope.laundreyList.push("Bottoms" + i++);
		}

		$scope.addTop = function() {
			var i = 1;
			$scope.laundreyList.push("Top" + i++);
		}

		$scope.addShoes = function() {
			var i = 1;
			$scope.laundreyList.push("Shoes" + i++);
		}
		console.log("testing");

		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		
		})
=======
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
>>>>>>> 72e120ef8d4a8a7b3245dcfe7f2b193339932d19
