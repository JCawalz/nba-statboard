app.config(function($stateProvider, $urlRouterProvider){  


  //set default path here
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'templates/homePage.html'
    })
    .state('stealsPage',{
      url:'/stealsPage',
      templateUrl: 'templates/stealsPage.html',
      params:{nameResult: null, valueResult: null, _flag: null}
    })
    .state('blocksPage',{
      url:'/blocksPage',
      templateUrl: 'templates/blocksPage.html',
      params:{nameResult: null, valueResult: null, _flag: null}
    })

});