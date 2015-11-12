app.controller('HomeController',function($scope, $rootScope, $route, $http, $timeout){
	
	// INIT VARIABLES
	$scope.showBackground = true;
	$scope.showSlideShow = true;
	$scope.skipPhoto = true;

	$(document).ready(function() {
   $('.text-container').css("animation-delay", "40s");
	});
	

	$scope.skip = function() {
		$scope.showSlideShow = false;
		$scope.skipPhoto = false;
		$('.text-container').css("animation-delay", "2s");
	};

	// hide skip button once animation is done.
	$timeout(function() {
    $scope.skipPhoto = false;
  }, 40000);

});