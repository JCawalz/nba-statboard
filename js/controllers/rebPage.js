app.controller('rebCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
	//REBOUNDS CONTROLLER
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.init = $stateParams._flag_REB;
	$scope.dataName = $stateParams.nameResult_REB;
	$scope.dataValue = $stateParams.valueResult_REB;

	$scope.back = function(){
		$state.go('home');
	}
}]);