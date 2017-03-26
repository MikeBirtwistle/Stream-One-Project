angular.module('DrakeApp', ['ngRoute']);
 
angular.module('DrakeApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
    })
    .when('/albums', {
        templateUrl: 'templates/albums.html',
    })
    .when('/tour-dates', {
        templateUrl: 'templates/tour-dates.html',
    })
    .when('/enquiries', {
        templateUrl: 'templates/enquiries.html',
    })
    .otherwise( {
		redirectTo: '/'
	});

});