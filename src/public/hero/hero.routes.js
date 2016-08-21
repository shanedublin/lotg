(function(){
  'use-strict';

  angular.module('lotg.hero').config(function($stateProvider, $urlRouterProvider){
      console.log("Hero Routes Loaded");
      
      $stateProvider.state('hero',{
        url:"/hero",
        templateUrl:'/hero/hero.html',
        controller: 'heroController as hero'
      }).state('hero-edit',{
    	  url:'/hero/edit',
    	  templateUrl:'/hero/hero.edit.html',
    	  controller: 'heroEditController as heroEdit',
    	  params: {
    		  hero: null
    	  }
      });     

  }).run(function(headerFactory){
	  headerFactory.addLink({name:'Heroes',url:'#/hero'});
	  console.log('wow');
  });

})();