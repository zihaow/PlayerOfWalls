app.controller('MainController',function($location, $window, $scope, $rootScope, $route, $http){
	$scope.showBackground = false;

	$scope.showSocial = true;

	$scope.homeText = "Home";
	$scope.aboutText = "About";
	$scope.experienceText = "Experience";
	$scope.contactText = "Contact";

	var currentPage = $location.path();
	if (currentPage === '/homec' || currentPage === '/aboutc' || currentPage === '/experiencec' || currentPage === '/contactc') {
		$scope.homeText = "主页";
		$scope.aboutText = "关于我";
		$scope.experienceText = "工作经历";
		$scope.contactText = "联系方式";

		$scope.homePage = "/homec";
		$scope.aboutPage = "/aboutc";
		$scope.experiencePage = "/experiencec";
		$scope.contactPage = "/contactc";
	}

	if (currentPage === '/' || currentPage === '/about' || currentPage === '/experience' || currentPage === '/contact') {
		$scope.homeText = "Home";
		$scope.aboutText = "About";
		$scope.experienceText = "Experience";
		$scope.contactText = "Contact";
		

		$scope.homePage = "/";
		$scope.aboutPage = "/about";
		$scope.experiencePage = "/experience";
		$scope.contactPage = "/contact";
	}


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
	    	}
				else
					$scope.showSocial = true;
    	});
	  });
	});

	$scope.chinese = function() {
		var currentPage = $location.path();
		$scope.homeText = "主页";
		$scope.aboutText = "关于我";
		$scope.experienceText = "工作经历";
		$scope.contactText = "联系方式";
		
		if (currentPage === '/')
			$scope.transfer = '/homec';
		if (currentPage === '/about')
			$scope.transfer = '/aboutc';
		if (currentPage === '/experience')
			$scope.transfer = 'experiencec';
		if (currentPage === '/contact')
			$scope.transfer = 'contactc';

		$scope.homePage = "/homec";
		$scope.aboutPage = "/aboutc";
		$scope.experiencePage = "/experiencec";
		$scope.contactPage = "/contactc";
	};

	$scope.english = function() {
		var currentPage = $location.path();
		$scope.homeText = "Home";
		$scope.aboutText = "About";
		$scope.experienceText = "Experience";
		$scope.contactText = "Contact";
		
		if (currentPage === '/homec')
			$scope.transfer = '/';
		if (currentPage === '/aboutc')
			$scope.transfer = '/about';
		if (currentPage === '/experiencec')
			$scope.transfer = '/experience';
		if (currentPage === '/contactc')
			$scope.transfer = '/contact';

		$scope.homePage = "/";
		$scope.aboutPage = "/about";
		$scope.experiencePage = "/experience";
		$scope.contactPage = "/contact";
	};
});