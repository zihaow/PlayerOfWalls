// Create the module.
var app = angular.module('zihaow', ['ngRoute']);

// Configure different routes
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl : 'pages/home',
        controller  : 'HomeController'
    })

    .when('/about', {
        templateUrl : 'pages/about',
        controller  : 'AboutController'
    })

    .when('/experience', {
        templateUrl : 'pages/experience',
        controller  : 'ExperienceController'
    })

    .when('/contact', {
        templateUrl : 'pages/contact',
        controller  : 'ContactController'
    });

    //use the HTML5 History API
    $locationProvider.html5Mode(true);
});

