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

      	$(".kayag").mouseenter(function(){
            $('.kayaking').css("z-index", "200");
            $('.nebog').css("z-index", "0");
            $('.kayag').css("z-index", "0");
            $('.simpg').css("z-index", "0");
            $('.riverg').css("z-index", "0");
            
            $('.kayaking').css("width", "100%");
            $('.kayaking').css("height", "100%");
            $('.kayaking').css("opacity", "1");
            $('.kayaking').css("-webkit-filter", "blur(0px)");
            $('.kayaking').css("-moz-filter", "blur(0px)");
            $('.kayaking').css("-o-filter", "blur(0px)");
            $('.kayaking').css("-ms-filter", "blur(0px)");
            $('.kayaking').css("filter", "blur(0px)");
        });

        $(".kayag").mouseleave(function(){
            $('.kayaking').css("z-index", "0");
            $('.nebog').css("z-index", "");
            $('.kayag').css("z-index", "");
            $('.simpg').css("z-index", "");
            $('.riverg').css("z-index", "");
            
            $('.kayaking').css("width", "");
            $('.kayaking').css("height", "");
            $('.kayaking').css("opacity", "");
            $('.kayaking').css("-webkit-filter", "");
            $('.kayaking').css("-moz-filter", "");
            $('.kayaking').css("-o-filter", "");
            $('.kayaking').css("-ms-filter", "");
            $('.kayaking').css("filter", "");
        });

        $(".nebog").mouseenter(function(){
            $('.nebo').css("z-index", "200");
            $('.kayag').css("z-index", "0");
            $('.simpg').css("z-index", "0");
            $('.riverg').css("z-index", "0");
            $('.nebog').css("z-index", "0");
            
            $('.nebo').css("left", "0");

            $('.nebo').css("width", "100%");
            $('.nebo').css("height", "100%");
            $('.nebo').css("opacity", "1");
            $('.nebo').css("-webkit-filter", "blur(0px)");
            $('.nebo').css("-moz-filter", "blur(0px)");
            $('.nebo').css("-o-filter", "blur(0px)");
            $('.nebo').css("-ms-filter", "blur(0px)");
            $('.nebo').css("filter", "blur(0px)");
        });

        $(".nebog").mouseleave(function(){
            $('.nebo').css("z-index", "0");
            $('.kayag').css("z-index", "");
            $('.simpg').css("z-index", "");
            $('.nebog').css("z-index", "");
            $('.riverg').css("z-index", "");
            
            $('.nebo').css("width", "");
            $('.nebo').css("height", "");
            $('.nebo').css("left", "");
            $('.nebo').css("opacity", "");
            $('.nebo').css("-webkit-filter", "");
            $('.nebo').css("-moz-filter", "");
            $('.nebo').css("-o-filter", "");
            $('.nebo').css("-ms-filter", "");
            $('.nebo').css("filter", "");
        });

        $(".simpg").mouseenter(function(){
            $('.simptek').css("z-index", "200");
            $('.simpg').css("z-index", "0");
            $('.kayag').css("z-index", "0");
            $('.riverg').css("z-index", "0");
            $('.nebog').css("z-index", "0");

            $('.simptek').css("top", "0");
            
            $('.simptek').css("width", "100%");
            $('.simptek').css("height", "100%");
            $('.simptek').css("opacity", "1");
            $('.simptek').css("-webkit-filter", "blur(0px)");
            $('.simptek').css("-moz-filter", "blur(0px)");
            $('.simptek').css("-o-filter", "blur(0px)");
            $('.simptek').css("-ms-filter", "blur(0px)");
            $('.simptek').css("filter", "blur(0px)");
        });

        $(".simpg").mouseleave(function(){
            $('.simptek').css("z-index", "0");
            $('.kayag').css("z-index", "");
            $('.simpg').css("z-index", "");
            $('.riverg').css("z-index", "");
            $('.nebog').css("z-index", "");
            
            $('.simptek').css("width", "");
            $('.simptek').css("height", "");
            $('.simptek').css("top", "");
            $('.simptek').css("opacity", "");
            $('.simptek').css("-webkit-filter", "");
            $('.simptek').css("-moz-filter", "");
            $('.simptek').css("-o-filter", "");
            $('.simptek').css("-ms-filter", "");
            $('.simptek').css("filter", "");
        });

        $(".riverg").mouseenter(function(){
            $('.river').css("z-index", "200");
            $('.riverg').css("z-index", "0");
            $('.kayag').css("z-index", "0");
            $('.nebog').css("z-index", "0");
            $('.simpg').css("z-index", "0");

            $('.river').css("top", "0");
            $('.river').css("left", "0");
            
            $('.river').css("width", "100%");
            $('.river').css("height", "100%");
            $('.river').css("opacity", "1");
            $('.river').css("-webkit-filter", "blur(0px)");
            $('.river').css("-moz-filter", "blur(0px)");
            $('.river').css("-o-filter", "blur(0px)");
            $('.river').css("-ms-filter", "blur(0px)");
            $('.river').css("filter", "blur(0px)");
        });

        $(".riverg").mouseleave(function(){
            $('.river').css("z-index", "0");
            $('.riverg').css("z-index", "");
            $('.kayag').css("z-index", "");
            $('.nebog').css("z-index", "");
            $('.simpg').css("z-index", "");
           
            $('.river').css("width", "");
            $('.river').css("height", "");
            $('.river').css("top", "");
            $('.river').css("left", "");
            $('.river').css("opacity", "");
            $('.river').css("-webkit-filter", "");
            $('.river').css("-moz-filter", "");
            $('.river').css("-o-filter", "");
            $('.river').css("-ms-filter", "");
            $('.river').css("filter", "");
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