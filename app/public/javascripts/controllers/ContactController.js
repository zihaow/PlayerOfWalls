app.controller('ContactController',function($scope, $rootScope, $route, $http){
	$scope.showBackground = false;
	$scope.showContact = false;
	$scope.showText = true;
	$scope.gotIt = false;
	var firstStar = false, secondStar = false; thirdStar = false;

	$(document).ready(function() {
		$(".zoomIn-moon").mouseenter(function(){
			$('.contact-page-container ').css("transform", "scale(1.2,1.2)");
		});

		$(".zoomIn-moon").mouseleave(function(){
			$('.contact-page-container ').css("transform", "");
		});
	});

	$scope.clickFirst = function() {
		firstStar = true;
		$('.star1p').css("color", "#AB3200");
	};

	$scope.clickSecond = function() {
		secondStar = true;
		$('.star2p').css("color", "#AB3200");
	};

	$scope.clickThird = function() {
		thirdStar = true;
		$('.star3p').css("color", "#AB3200");

		if (firstStar === true && secondStar === true && thirdStar === true){
			$scope.showContact = true;
			$scope.gotIt = true;
			$scope.showText = false;
		}
	};
});