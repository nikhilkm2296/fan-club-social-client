var controllerName='AppCtrl'

fcSocialApp.controller(controllerName, function($scope, $ionicLoading, $location, AuthServerProvider, Principal ) {
    console.log('App Main controller invoked...');

    $scope.showAlert = function( msg ) {
        $ionicLoading.show({ template: msg, noBackdrop: true, duration: 2500 });
    };

    $scope.showLoading = function() {
    	console.log( 'Loading called' );
    	$ionicLoading.show({
      		template: 'Loading...'
    	});
    };

    $scope.hideLoading = function() {
    	$ionicLoading.hide();
  	};

    $scope.logout = function () {
        AuthServerProvider.logout();
        Principal.authenticate(null);
        $location.path('/login');
        // Reset state memory
        // $rootScope.previousStateName = undefined;
        // $rootScope.previousStateNameParams = undefined;
    };

});