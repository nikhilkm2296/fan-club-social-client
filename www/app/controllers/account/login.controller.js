
var controllerName = 'LoginCtrl';

fcSocialApp.controller(controllerName, function($scope, $location, Auth) {
	console.log('Login Controller Invoked...');

    $scope.credentials = {};

    $scope.login = function () {
        if( validate() ) {
            Auth.login({
                username: $scope.credentials.username,
                password: $scope.credentials.password,
                rememberMe: $scope.credentials.rememberMe
            }).then(function () {
                $scope.showAlert('Welcome ' + $scope.credentials.username + ' :)');
                $location.path('/home/feeds');
            }).catch(function () {
                $scope.showAlert('Something went wrong :( . Please try again later.');
            });        
        }
    };

    function validate() {
        if( !$scope.credentials.username ) {
            $scope.showAlert('Please enter a valid username');
            return false;
        } else if ( !$scope.credentials.password ) {
            $scope.showAlert('Please enter the password');
            return false;
        }
        return true;
    };
});
