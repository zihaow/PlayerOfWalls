app.controller('AboutController',function($window, $scope, $rootScope, $route, $http){
	$scope.showBackground = false;
	$scope.showPage1S = true;
	$scope.showPage2S = true;
	$scope.showPage3S = true;
	

	$scope.hidePage1 = function() {
		$scope.showPage1S = false;
	};

	$scope.hidePage2 = function() {
		$scope.showPage2S = false;
	};

	$scope.hidePage3 = function() {
		$scope.showPage3S = false;
	};
});