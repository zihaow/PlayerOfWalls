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

  	$(".kayaking").mouseenter(function(){
        $('.kayaking').css("z-index", "200");
        $('.kayaking').css("width", "100%");
        $('.kayaking').css("height", "100%");
				console.log("hovering");
    });

    $(".kayaking").mouseleave(function(){
        $('.kayaking').css("z-index", "0");
        $('.kayaking').css("width", "");
        $('.kayaking').css("height", "");
    });

    $(".nebo").mouseenter(function(){
        $('.nebo').css("z-index", "200");
        $('.nebo').css("width", "100%");
        $('.nebo').css("height", "100%");
        $('.nebo').css("left", "0");
    });

    $(".nebo").mouseleave(function(){
        $('.nebo').css("z-index", "0");
        $('.nebo').css("width", "");
        $('.nebo').css("height", "");
        $('.nebo').css("left", "");
    });

    $(".simptek").mouseenter(function(){
        $('.simptek').css("z-index", "200");
        $('.simptek').css("width", "100%");
        $('.simptek').css("height", "100%");
        $('.simptek').css("top", "0");
    });

    $(".simptek").mouseleave(function(){
        $('.simptek').css("z-index", "0");
        $('.simptek').css("width", "");
        $('.simptek').css("height", "");
        $('.simptek').css("top", "");
    });

    $(".river").mouseenter(function(){
        $('.river').css("z-index", "200");
        $('.river').css("width", "100%");
        $('.river').css("height", "100%");
        $('.river').css("top", "0");
        $('.river').css("left", "0");
    });

    $(".river").mouseleave(function(){
        $('.river').css("z-index", "0");
        $('.river').css("width", "");
        $('.river').css("height", "");
        $('.river').css("top", "");
        $('.river').css("left", "");
    });
  	
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