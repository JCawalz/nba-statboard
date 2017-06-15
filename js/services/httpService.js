app.service('httpService', function($q, $http){

	function getData() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://stats.nba.com/js/data/widgets/home_playoffs.json'
		}).then(function(response){
			deferred.resolve(response.data);
		}, function(error){
			deferred.reject('Error Retrieving JSON');
		});
		return deferred.promise;
	}

	return {
		getData: getData
	}
});