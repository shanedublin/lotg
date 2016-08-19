(function(){
  'use-strict';

  angular.module('lotg.hero').config(function($stateProvider, $urlRouterProvider){
      console.log("Hero Routes Loaded");
      $urlRouterProvider.otherwise("/home");
      $stateProvider.state('hero',{
        url:"/hero",
        templateUrl:'/hero/hero.html',
      });     

  }).run(function(headerFactory){
	  headerFactory.addLink({name:'Heroes',url:'#/hero'});
	  console.log('wow');
  });

})();