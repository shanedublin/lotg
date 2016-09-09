(function(){
  'use-strict';

  angular.module('lotg.store').config(function($stateProvider, $urlRouterProvider){
     
      $stateProvider.state('store',{
        url:"/store",
        templateUrl:'/store/store.html',
        controller: 'storeController as store'
      }).state('store-hero',{
    	  url:'/store/heroes',
    	  templateUrl: '/store/hero/hero.html',
    	  controller: 'storeController as store'
    		  
      }).state('store-skins',{
    	  url:'/store/skins',
    	  templateUrl: '/store/skin/skin.html',
    	  controller: 'storeController as store'
    		  
      });

  }).run(function(headerFactory){
	  headerFactory.addLink({name:'Store',url:'#/store/heroes'});
  });

})();