app.controller('astCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
	//ASSISTS CONTROLLER
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult_AST;
	$scope.dataValue = $stateParams.valueResult_AST;
	
	$scope.back = function(){
		$state.go('home');
	}
}]);