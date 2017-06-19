app.controller('ptsCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
	//POINTS CONTROLLER
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult_PTS;
	$scope.dataValue = $stateParams.valueResult_PTS;

    $scope.openModal = function(a) {
    	    if (a == $scope.dataName[0]){
                $scope.dataJSON = {
                                rank: 'First',
                                name: $scope.dataName[0],
                                points: $scope.dataValue[0] + ' points per game'
                                };
    	    }
    	    else if (a == $scope.dataName[1]){
                $scope.dataJSON = {
                                rank: 'Second',
                                name: $scope.dataName[1],
                                points: $scope.dataValue[1] + ' points per game'
                                };
    	    }
    	    else if (a == $scope.dataName[2]){
                $scope.dataJSON = {
                                rank: 'Third',
                                name: $scope.dataName[2],
                                points: $scope.dataValue[2] + ' points per game'
                                };
    	    }
    	    else if (a == $scope.dataName[3]){
                $scope.dataJSON = {
                                rank: 'Fourth',
                                name: $scope.dataName[3],
                                points: $scope.dataValue[3] + ' points per game'
                                };
    	    }
    	    else if (a == $scope.dataName[4]){
                $scope.dataJSON = {
                                rank: 'Fifth',
                                name: $scope.dataName[4],
                                points: $scope.dataValue[4] + ' points per game'
                                };
    	    }
	}


	$scope.back = function(){
		$state.go('home');
	}
}]);