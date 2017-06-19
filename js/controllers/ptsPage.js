app.controller('ptsCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
	//POINTS CONTROLLER
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult_PTS;
	$scope.dataValue = $stateParams.valueResult_PTS;
	
	$scope.back = function(){
		$state.go('home');
	}
}]);