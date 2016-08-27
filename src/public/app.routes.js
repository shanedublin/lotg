(function(){
  'use-strict';

  angular.module('lotg').config(function($stateProvider, $urlRouterProvider){
     // console.log("Main Routes Loaded");
      //$urlRouterProvider.otherwise("/home");
      $stateProvider.state('home',{
        url:"/home",
        templateUrl:'/home/home.html',
      }).state('about',{
    	  url:'/about',
    	  templateUrl:'/about/about.html'
      });

  });

})();