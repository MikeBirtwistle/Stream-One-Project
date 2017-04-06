angular.module('DrakeApp', ['ngRoute', 'RouteControllers', 'ImageCarouselDirective', 'AudioPlayerDirective', 'VideoPlayerDirective']);
 
angular.module('DrakeApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })

    .when('/about', {
        templateUrl: 'templates/about.html',
    })

    .when('/albums', {
        templateUrl: 'templates/albums.html',
    })

    .when('/tourinfo', {
        templateUrl: 'templates/tourinfo.html',
    })

    .when('/enquiries', {
        templateUrl: 'templates/enquiries.html',
    })

    .otherwise( {
		redirectTo: '/'
	});

});