app.config(function($stateProvider, $urlRouterProvider){  

  console.log('Loading UI-Router');

  //set default path here
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'templates/homePage.html'
    })
    .state('points',{
      url:'/top_5_players_in_points',
      templateUrl: 'templates/ptsPage.html',
      params:{nameResult_PTS: null, valueResult_PTS: null, _flag_PTS: null}
    })
    .state('rebounds',{
      url:'/top_5_players_in_rebounds',
      templateUrl: 'templates/rebPage.html',
      params:{nameResult_REB: null, valueResult_REB: null, _flag_REB: null}
    })
    .state('assists',{
      url:'/top_5_players_in_assists',
      templateUrl: 'templates/astPage.html',
      params:{nameResult_AST: null, valueResult_AST: null, _flag_AST: null}
    });
});