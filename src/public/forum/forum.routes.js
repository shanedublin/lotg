(function(){
  'use-strict';

  angular.module('lotg.forum').config(function($stateProvider, $urlRouterProvider){
      console.log("Forum Routes Loaded");      
      $stateProvider.state('forum',{
        url:"/forum",
        templateUrl:'/forum/forum.html',
        controller: 'forumController as forum'
      });     

  }).run(function(headerFactory){
	  headerFactory.addLink({name:'Forum',url:'#/forum'});	  
  });

})();