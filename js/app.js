angular.module('DrakeProject', ['ngRoute',]);
 
angular.module('DrakeProject').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
    });
});