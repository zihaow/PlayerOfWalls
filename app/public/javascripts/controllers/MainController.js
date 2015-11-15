app.controller('MainController',function($window, $scope, $rootScope, $route, $http){
	$scope.showBackground = false;

	$scope.showSocial = true;

	// Relocate social container if window width less than 500
	$(document).ready(function() {
		var windowWidth = $(window).width();
		
		// initial checking.
		if ( windowWidth <= 500){
			$scope.showSocial = false;
		}
		else
			$scope.showSocial = true;

		// apply changes on brower size changes.
		$(window).resize(function(){
	    var currentwidth = $(window).width();
	   	
	    $scope.$apply(function(){
       	if ( currentwidth <= 500) {
	    		$scope.showSocial = false;
	    		console.log("shit");
	   		}
				else
					$scope.showSocial = true;
    	});
	  });
	});
});