var app = angular.module('nbaApp', ['ui.router']);

app.controller('mainCtrl',['httpService','$scope', '$log', '$state',
	function(httpService, $scope, $log, $state){

$scope.ptsName = {}, $scope.ptsValue = {},
$scope.rebName = {}, $scope.rebValue = {},
$scope.astName = {}, $scope.astValue = {},
$scope.blkName = {}, $scope.blkValue = {},
$scope.stlName = {}, $scope.stlValue = {},
$scope.fgpctName = {}, $scope.fgpctValue = {},
$scope.fg3mName = {}, $scope.fg3mValue = {},
$scope.fg3pctName = {}, $scope.fg3pctValue = {},
$scope.fpName = {}, $scope.fpValue = {};
$scope.flag = "";


	httpService.getData().then(function(response){
	$log.info('JSON RESPONSE =======>', response);
	var jsonData = response;
	for (var i in jsonData.items[0].items){
		var basketballObj = jsonData.items[0].items[i];
			for (i = 0; i < 5; i++){
				if (basketballObj.name == 'PTS'){
					$scope.ptsName[i] = basketballObj.playerstats[i].PLAYER_NAME;
					$scope.ptsValue[i] = basketballObj.playerstats[i].PTS;
				}
				else if (basketballObj.name == 'REB'){
						$scope.rebName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.rebValue[i] = basketballObj.playerstats[i].REB;
				}
				else if (basketballObj.name == 'AST'){
						$scope.astName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.astValue[i] = basketballObj.playerstats[i].AST;
				}
				else if (basketballObj.name == 'BLK'){
						$scope.blkName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.blkValue[i] = basketballObj.playerstats[i].BLK;
				}
				else if (basketballObj.name == 'STL'){
						$scope.stlName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.stlValue[i] = basketballObj.playerstats[i].STL;
				}
				else if (basketballObj.name == 'FG_PCT'){
						$scope.fgpctName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fgpctValue[i] = basketballObj.playerstats[i].FG_PCT;
				}
				else if (basketballObj.name == 'FG3M'){
						$scope.fg3mName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fg3mValue[i] = basketballObj.playerstats[i].FG3M;
				}
				else if (basketballObj.name == 'FG3_PCT'){
						$scope.fg3pctName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fg3pctValue[i] = basketballObj.playerstats[i].FG3_PCT;
				}
				else if (basketballObj.name == 'FANTASY_POINTS'){
						$scope.fpName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fpValue[i] = basketballObj.playerstats[i].FANTASY_POINTS;
				}
			}
	}
	}, function(error){
		$log.info('ERROR =======>', error);
	});

	$scope.points = function(){
		$scope.flag = "PTS";
		$state.go('stat', {nameResult: $scope.ptsName, valueResult: $scope.ptsValue, _flag: $scope.flag});
	}

	$scope.rebounds = function(){
		$scope.flag = "REB";
		$state.go('stat', {nameResult: $scope.rebName, valueResult: $scope.rebValue, _flag: $scope.flag});
	}
//PTS, REB, AST, BLK, STL, FG_PCT (fgpct),FG3M,FG3_PCT(fg3pct), FANTASY_POINTS FP
	$scope.assists = function(){
		$scope.flag = "AST";
		$state.go('stat', {nameResult: $scope.astName, valueResult: $scope.astValue, _flag: $scope.flag});
	}

	$scope.blocks = function(){
		$scope.flag = "BLK";
		$state.go('stat', {nameResult: $scope.blkName, valueResult: $scope.blkValue, _flag: $scope.flag});
	}

	$scope.steals = function(){
		$scope.flag = "STL";
		$state.go('stat', {nameResult: $scope.stlName, valueResult: $scope.stlValue, _flag: $scope.flag});
	}

	$scope.fgpercent = function(){
		$scope.flag = "FG_PCT";
		$state.go('stat', {nameResult: $scope.fgpctName, valueResult: $scope.fgpctValue, _flag: $scope.flag});
	}

	$scope.fgthree = function(){
		$scope.flag = "FG3M";
		$state.go('stat', {nameResult: $scope.fg3mName, valueResult: $scope.fg3mValue, _flag: $scope.flag});
	}

	$scope.fg3percent = function(){
		$scope.flag = "FG3_PCT";
		$state.go('stat', {nameResult: $scope.fg3pctName, valueResult: $scope.fg3pctValue, _flag: $scope.flag});
	}

	$scope.fantasypoints = function(){
		$scope.flag = "FP";
		$state.go('stat', {nameResult: $scope.fpName, valueResult: $scope.fpValue, _flag: $scope.flag});
	}

}]);