app.controller('fg3percentCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult;
	$scope.dataValue = $stateParams.valueResult;

	$scope.back = function(){
		$state.go('home');
	}
}]);