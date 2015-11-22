var controllerName = 'HomeEventsCtrl';

fcSocialApp.controller(controllerName, function($scope, Event, ParseLinks) {
	console.log('Home events controller invoked');
    $scope.events = [];
    $scope.page = 0;
    
    $scope.loadAll = function() {
    	$scope.showLoading();
        Event.query({page: $scope.page, size: 10}, function(result, headers) {
            $scope.links = ParseLinks.parse(headers('link'));
            $scope.events = $scope.events.concat( result );
        });
        $scope.$broadcast('scroll.refreshComplete');
   		$scope.$broadcast('scroll.infiniteScrollComplete');
       	$scope.hideLoading();
    };
    $scope.loadAll();

	$scope.loadPage = function(page) {
		if( $scope.moreDataCanBeLoaded() ) {
			$scope.page = page;
    		$scope.loadAll();
		}
	};

	$scope.refreshAll = function() {
    	$scope.page = 0;
    	$scope.events = [];
    	$scope.loadAll();
	};
});