var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroes', {
      templateUrl: '/views/heroes.html',
      controller: "HeroController"
    })
    .when('/list', {
      templateUrl: '/views/list.html',
      controller: "ListController"
    })
    .otherwise({
      redirectTo: 'heroes'
    });
}]);
