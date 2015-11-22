var controllerName = 'HomeFixturesCtrl';

fcSocialApp.controller(controllerName, function($scope, Fixture, ParseLinks) {
	console.log('Home fixtures controller invoked');
    $scope.fixtures = [];
    $scope.page = 0;
    $scope.loadAll = function() {
        $scope.showLoading();
        Fixture.query( { page: $scope.page, size: 10 }, function( result, headers ) {
            $scope.links = ParseLinks.parse(headers('link'));
            for (var i = result.length - 1; i >= 0; i--) {
				var pubDate = new Date( result[i].matchDate );
				result[i].matchFormattedTime = pubDate.toDateString();
			};
            $scope.fixtures = $scope.fixtures.concat( result );
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
        $scope.fixtures = [];
        $scope.loadAll();
    };

    $scope.moreDataCanBeLoaded = function() {
    	if( $scope.links && $scope.links[ 'next' ] ) {
    		return true;
    	}
    	return false;
    };

	$scope.isMatchLive = function( fixture ) {
		if( fixture.teamOneScore === "?" || fixture.teamTwoScore === "?" ) {
			return false;
		} else {
			return true;
		}
	};
});