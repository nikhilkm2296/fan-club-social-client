
fcSocialApp.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate){

	$scope.toggleLeftSideMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
})
