app.controller('ExperienceController',function($window, $scope, $rootScope, $route, $http, $timeout){
	$scope.showBackground = false;
	$scope.showConfidence = false;
	$scope.showTeamwork = false;
	$scope.showTimeManagement = false;
	$scope.showScroll = false;
	$scope.showSimpTek = true;

	// overflow auto 
	$(document).ready(function() {
  	$('.content').css("overflow", "auto");
  	var windowHeight = $(window).height();
  	var halfHeight = windowHeight;
  	windowHeight = windowHeight * 2;
  	$('.content').css("height", windowHeight);
  	
   	// check if the user is on second page.
   	$window.onscroll = function() {
			if( $(window).scrollTop() >= halfHeight/2){ 	
				console.log($(window).scrollTop());
				console.log("on second page");
			}
		};
	});

	$scope.showConfident = function() {
		$('.confidence-section').removeClass("slideOutRight animated");
		$('.confidence-section').addClass("slideInLeft animated");
		$scope.showConfidence = true;
	};
	$scope.hideConfidence = function() {
		$('.confidence-section').removeClass("slideInLeft animated");
		$('.confidence-section').addClass("slideOutRight animated");
	};

	$scope.showTeamworks = function() {
		$('.teamwork-section').removeClass("flipOutY animated");
		$('.teamwork-section').addClass("rotateInUpRight animated");
		$scope.showTeamwork = true;
	};
	$scope.hideTeamwork = function() {
		$('.teamwork-section').removeClass("rotateInUpRight animated");
		$('.teamwork-section').addClass("flipOutY animated");
	};

	$scope.showTimeMgmt= function() {
		$('.timeMgmt-section').removeClass("zoomOutRight animated");
		$('.timeMgmt-section').addClass("zoomInRight animated");
		$scope.showTimeManagement = true;
	};
	$scope.hideTimeMgmt = function() {
		$('.timeMgmt-section').removeClass("zoomInRight animated");
		$('.timeMgmt-section').addClass("zoomOutRight animated");
	};

	$scope.hideSimpTekk = function() {
		$scope.showSimpTek = false;
	};

	$scope.showSimpTekk = function() {
		$scope.showSimpTek = true;
	};

	// show scroll button after 5s.
	$timeout(function() {
    $scope.showScroll = true;
  }, 5000);

  // hide scroll button after 10s.
	$timeout(function() {
		$('.scroll').addClass("rotateOutUpRight animated");
		$('.scroll-v').addClass("rotateOutUpRight animated");
  }, 9000);
});