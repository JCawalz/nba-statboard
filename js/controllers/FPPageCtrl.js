app.controller('fantasypointsCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult;
	$scope.dataValue = $stateParams.valueResult;


	$scope.pass = function(a){

        if(a == "Russell Westbrookl"){
                $scope.X = $scope.rank[0];
               $scope.Y = $scope.dataName[0];
               $scope.Z = $scope.dataValue[0];
            }
        else if(a == "LeBron James"){
               $scope.X = $scope.rank[1];
               $scope.Y = $scope.dataName[1];
               $scope.Z = $scope.dataValue[1];
            }
        else if(a == "Paul George"){
               $scope.X = $scope.rank[2];
               $scope.Y = $scope.dataName[2];
               $scope.Z = $scope.dataValue[2];
            }
        else if(a == "John Wall"){
                $scope.X = $scope.rank[3];
                $scope.Y = $scope.dataName[3];
                $scope.Z = $scope.dataValue[3];
            }
        else if(a == "Chris Paul"){
               $scope.X = $scope.rank[4];
               $scope.Y = $scope.dataName[4];
               $scope.Z = $scope.dataValue[4];
            }
        }

	$scope.back = function(){
		$state.go('home');
	}
}]);