(function(){
  'use-strict';

  angular.module('lotg.hero').config(function($stateProvider, $urlRouterProvider){
    //  console.log("Hero Routes Loaded");
      
      $stateProvider.state('heroList',{
        url:"/hero/list",
        templateUrl:'/hero/hero.table.html',
        controller: 'heroListController as heroList'
      }).state('heroEdit',{
    	  url:'/hero/edit',
    	  templateUrl:'/hero/hero.edit.html',
    	  controller: 'heroEditController as heroEdit',
    	  params: {
    		  hero: null
    	  }
      });     

  }).run(function(headerFactory){
	  headerFactory.addLink({name:'Heroes',url:'#/hero/list'});
  });

})();