'use strict';

angular.module('myApp.story', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/story/:storyName', {
          templateUrl: 'templates/story.html',
          controller: 'storyCtrl'
      });
}])

.controller('storyCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
      $http.get('stories/pioggia/'+$routeParams.storyName+'.json').success(function(data) {
        $scope.story = data.story;

        $scope.story.title.style = $scope.story.styles[$scope.story.title.style];

        angular.forEach($scope.story.items, function(item, key) {
          item.style = $scope.story.styles[item.style];
          if(item.caption != null){
              item.caption.style = $scope.story.styles[item.caption.style];
          }
        });
      });
}]);