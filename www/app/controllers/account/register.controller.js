var controllerName='RegisterCtrl'

fcSocialApp.controller(controllerName, function($scope, $location, Auth) {
	console.log('Register Controller Invoked...');

	$scope.registerAccount = {};
    $scope.registerAccount.appReq = true;
    $scope.confirmPassword = {};

    $scope.register = function () {
        if( validate() ) {
            if ($scope.registerAccount.password !== $scope.confirmPassword.val) {
                $scope.showAlert("Password and confirmPassword doesn't match");
            } else {
                // $scope.registerAccount.langKey = $translate.use();
                $scope.doNotMatch = null;
                $scope.error = null;
                $scope.errorUserExists = null;
                $scope.errorEmailExists = null;

                Auth.createAccount($scope.registerAccount).then(function () {
                    $scope.showAlert("Registered Successfully.");
                    $location.path('/login');
                }).catch(function (response) {
                    $scope.success = null;
                    if (response.status === 400 && response.data === 'login already in use') {
                        $scope.showAlert("Username already exists. Please provide a different username.");
                    } else if (response.status === 400 && response.data === 'e-mail address already in use') {
                        $scope.showAlert("Email ID provided already exists. Please provide a valid email ID.");
                    } else if (response.status === 403 && response.data === 'Invalid access code..') {
                        $scope.showAlert("Invalid access code..");
                    } else {
                        $scope.showAlert("Something went wrong. :( Please try again.");
                    }
                });
            }
        }
    };

    function validate() {
        success = false;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        if(!$scope.registerAccount.accessCode) {
            $scope.showAlert('Access Id cannot be empty..');
        } else if(!$scope.registerAccount.firstName) {
            $scope.showAlert('First Name cannot be empty..');
        } else if(!$scope.registerAccount.lastName) {
            $scope.showAlert('Last Name cannot be empty..');
        } else if(!$scope.registerAccount.login) {
            $scope.showAlert('Username..');
        } else if(!$scope.registerAccount.password) {
            $scope.showAlert('Password cannot be empty..');
        } else if(!$scope.confirmPassword.val) {
            $scope.showAlert('Confirm Password cannot be empty..');
        } else if (!$scope.registerAccount.email) {
            $scope.showAlert('Please Enter a valid email id');
        } else {
            success = true;
        }
        return success;
    }
});