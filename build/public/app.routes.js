(function(){
  'use-strict';

  angular.module('lotg').config(function($stateProvider, $urlRouterProvider){
      console.log("loaded");
      $urlRouterProvider.otherwise("/home");
      $stateProvider.state('home',{
        url:"/home",
        templateUrl:'/app/home/home.html',
      });

  });

})();