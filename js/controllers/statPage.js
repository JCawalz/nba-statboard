app.controller('statCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
	
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.init = $stateParams._flag;
	$scope.dataName = $stateParams.nameResult;
	$scope.dataValue = $stateParams.valueResult;
	
	$scope.back = function(){
		$state.go('home');
	}
}]);