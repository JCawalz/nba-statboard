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
    })
    .state('fg3percent',{
       url:'/fg3percent',
       templateUrl: 'templates/fg3percentPage.html',
       params:{nameResult: null, valueResult: null}
    })
    .state('fppg',{
           url:'/ffpg',
           templateUrl: 'templates/FPPage.html',
           params:{nameResult: null, valueResult: null}
        })
});