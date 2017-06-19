app.controller('blocksCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.init = $stateParams._flag;
	$scope.dataName = $stateParams.nameResult;
	$scope.dataValue = $stateParams.valueResult;


	$scope.displaySteals = function(a){

        if (a==$scope.dataName[0])
            {
            $scope.JSON={
                rank:"Rank 1",
                name:$scope.dataName[0],
                value:$scope.dataValue[0]
                }
            }

        else if (a==$scope.dataName[1])
                {
                $scope.JSON={
                    rank:"Rank 2",
                    name:$scope.dataName[1],
                    value:$scope.dataValue[1]
                    }
                }

        else if (a==$scope.dataName[2])
                {
                $scope.JSON={
                    rank:"Rank 3",
                    name:$scope.dataName[2],
                    value:$scope.dataValue[2]
                    }
                }

        else if (a==$scope.dataName[3])
                {
                $scope.JSON={
                    rank:"Rank 4",
                    name:$scope.dataName[3],
                    value:$scope.dataValue[3]
                    }
                }



        else if (a==$scope.dataName[4])
                {
                $scope.JSON={
                    rank:"Rank 5",
                    name:$scope.dataName[4],
                    value:$scope.dataValue[4]
                    }
                }



    }

	$scope.back = function(){
		$state.go('home');
	}
}]);