app.config(function($stateProvider, $urlRouterProvider){  

  console.log('Loading UI-Router');

  //set default path here
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'templates/homePage.html'
    })
    .state('stat',{
      url:'/stat',
      templateUrl: 'templates/statPage.html',
      params:{nameResult: null, valueResult: null, _flag: null}
    });
});