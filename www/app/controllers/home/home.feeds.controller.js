var controllerName = 'HomeFeedsCtrl';

fcSocialApp.controller(controllerName, function( $scope, HomeService, Feed, ParseLinks ) {
	console.log( 'Home feeds controller invoked' );
    $scope.feeds = [];
    $scope.page = 0;
    $scope.loadAll = function() {
        $scope.showLoading();
		Feed.query( { page: $scope.page, size: 10 }, function( result, headers ) {
        	$scope.links = ParseLinks.parse(headers('link'));
       		for (var i = result.length - 1; i >= 0; i--) {
				var pubDate = new Date( result[i].publicationDate );
				result[i].publicationDate = pubDate.toDateString();
			};
        	$scope.feeds = $scope.feeds.concat( result );
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
        $scope.feeds = [];
        $scope.loadAll();
    };


    $scope.moreDataCanBeLoaded = function() {
        if( $scope.links && $scope.links[ 'next' ] ) {
            return true;
        }
        return false;
    };
});