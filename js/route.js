app.config(function($stateProvider, $urlRouterProvider){  

  console.log('Loading UI-Router');

  //set default path here
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'templates/homePage.html'
    })
    .state('fieldGoalPCT',{
          url:'/fieldGoalPCT',
          templateUrl: 'templates/fieldGoalPCT.html',
          params:{nameResult: null, valueResult: null}
    })
    .state('fieldGoal3P',{
          url:'/fieldGoal3P',
          templateUrl: 'templates/fieldGoal3P.html',
          params:{nameResult: null, valueResult: null}
    });
});