'use strict';
var storiesPath = "stories/pioggia/";


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.story',
    'ngSanitize'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: ''});
    }])
    .directive('ngStory', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'templates/story.html'
        };
    });


// Story module routes
angular.module('myApp.story', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/story/:storyName', {
          templateUrl: 'templates/storyWrapper.html',
          controller: 'storyCtrl'
    });
}])

.controller('storyCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {

      $http.get(storiesPath+$routeParams.storyName+'.json').success(function(data) {
        $scope.story = data.story;

        $scope.story.title.style = $scope.story.styles[$scope.story.title.style];
        $scope.story.subtitle.style = $scope.story.styles[$scope.story.subtitle.style];

        angular.forEach($scope.story.items, function(item, key) {
          item.style = $scope.story.styles[item.style];
          if(item.caption != null){
              item.caption.style = $scope.story.styles[item.caption.style];
          }
        });

      });
}]);