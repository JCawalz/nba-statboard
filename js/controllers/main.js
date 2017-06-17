var app = angular.module('nbaApp', ['ui.router']);

app.controller('mainCtrl',['httpService','$scope', '$log', '$state',
	function(httpService, $scope, $log, $state){


$scope.blkName = {}, $scope.blkValue = {},
$scope.stlName = {}, $scope.stlValue = {},
$scope.flag = "";


	httpService.getData().then(function(response){
	$log.info('JSON RESPONSE =======>', response);
	var jsonData = response;
	for (var i in jsonData.items[0].items){
		var basketballObj = jsonData.items[0].items[i];
			for (i = 0; i < 5; i++){

				if (basketballObj.name == 'STL'){
						$scope.stlName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.stlValue[i] = basketballObj.playerstats[i].STL;
				}

				else if (basketballObj.name == 'BLK'){
                						$scope.blkName[i] = basketballObj.playerstats[i].PLAYER_NAME;
                						$scope.blkValue[i] = basketballObj.playerstats[i].BLK;
                }

			}
	}
	}, function(error){
		$log.info('ERROR =======>', error);
	});


	$scope.blocks = function(){
        $scope.flag = "BLK";
        $state.go('blocksPage', {nameResult: $scope.blkName, valueResult: $scope.blkValue, _flag: $scope.flag});
    };

    $scope.steals = function(){
        $scope.flag = "STL";
        $state.go('stealsPage', {nameResult: $scope.stlName, valueResult: $scope.stlValue, _flag: $scope.flag});
    };

}]);