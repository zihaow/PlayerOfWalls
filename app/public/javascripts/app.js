// Create the module.
var app = angular.module('zihaow', ['ngRoute']);


app.run(['$rootScope', '$timeout', function($root, $timeout) {
    $root.$on('$routeChangeStart', function(e, curr, prev) { 
    if (curr.$$route && curr.$$route.resolve) {
      // Show a loading message until promises aren't resolved
      $root.loadingView = true;
      console.log("loading required");
    }
    });
    $root.$on('$routeChangeSuccess', function(e, curr, prev) { 
    // Hide loading message
    console.log("loading done");
    $root.loadingView = false;
    /*
    $root.loadingView = true;
    $timeout(function() {
        $root.loadingView = false;
    }, 2000);
    */
    });
}]);


// Configure different routes
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl : 'pages/home',
        controller  : 'HomeController'
    })

    .when('/homec', {
        templateUrl : 'pages/homec',
        controller  : 'HomeController'
    })

    .when('/about', {
        templateUrl : 'pages/about',
        controller  : 'AboutController'
    })

    .when('/aboutc', {
        templateUrl : 'pages/aboutc',
        controller  : 'AboutController'
    })

    .when('/experience', {
        templateUrl : 'pages/experience',
        controller  : 'ExperienceController'
    })

    .when('/experiencec', {
        templateUrl : 'pages/experiencec',
        controller  : 'ExperienceController'
    })

    .when('/contact', {
        templateUrl : 'pages/contact',
        controller  : 'ContactController'
    })

    .when('/contactc', {
        templateUrl : 'pages/contactc',
        controller  : 'ContactController'
    });

    //use the HTML5 History API
    $locationProvider.html5Mode(true);
});

