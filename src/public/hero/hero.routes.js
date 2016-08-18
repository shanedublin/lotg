(function(){
  'use-strict';

  angular.module('lotg').config(function($stateProvider, $urlRouterProvider){
      console.log("Hero Routes Loaded");
      $urlRouterProvider.otherwise("/home");
      $stateProvider.state('hero',{
        url:"/hero",
        templateUrl:'/hero/hero/hero.html',
      });

  });

})();