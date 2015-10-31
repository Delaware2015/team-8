var app = angular.module('gwJpmc8App', ['ezfb', 'ngRoute'])

.constant('SOCIAL_PLUGINS', [
  'like', 'share-button', 'send', 'post', 'video', 
  'comments', 'page', 'follow'
])

.config(function (ezfbProvider, $routeProvider, SOCIAL_PLUGINS) {
  ezfbProvider.setInitParams({
    appId: '680945075374563',
    version: 'v2.3'
  });
  
  $routeProvider.otherwise({redirectTo: '/video'});
  
  angular.forEach(SOCIAL_PLUGINS, function (dirTag) {
    var routeName = dirTag;
    
    $routeProvider
    .when('/' + routeName, {
      templateUrl: routeName + '.html'
    });
  });
})

.controller('facebookCtrl', function ($scope, $route, SOCIAL_PLUGINS, $location) {
  $scope.SOCIAL_PLUGINS = SOCIAL_PLUGINS;
  
  $scope.pluginOn = true;
  $scope.rendering = false;
  
  $scope.goto = function (dirTag) {
    $location.path('/' + dirTag);
  };
  
  $scope.isActive = function (dirTag) {
    return ($location.path() === '/' + dirTag);
  };
  
  $scope.rendered = function () {
    $scope.rendering = false;
  };
  
  $scope.$watch('pluginOn', function (newVal, oldVal) { 
    if (newVal !== oldVal) {
      $scope.rendering = true;
    }
  });