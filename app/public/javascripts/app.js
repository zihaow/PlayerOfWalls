// Create the module.
var app = angular.module('playersOfWall', ['ngRoute','ngFileUpload']);

// Configure different routes
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl : 'pages/home',
        controller  : 'HomeController'
    })

    .when('/student', {
        templateUrl : 'student'
    })

    .when('/student_one', {
        templateUrl : 'student_one'
    })

    .when('/upload_image', {
        templateUrl : 'upload_image'
    })

    .when('/upload_image_url', {
        templateUrl : 'upload_image_url'
    })

    .when('/delete_image', {
        templateUrl : 'delete_image'
    });

    //use the HTML5 History API
    $locationProvider.html5Mode(true);
});

