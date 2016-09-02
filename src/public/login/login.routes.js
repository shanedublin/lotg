(function(){
  'use-strict';

  angular.module('lotg.login').config(function($stateProvider, $urlRouterProvider){
     
      console.log('login routes');
      $stateProvider.state('login',{
        url:"/login",
        templateUrl:'/login/login.html',
        controller: 'loginController as login'
      });

  }).run(function(headerFactory,$state){
	  headerFactory.addRightLink({name:'Login',url:'#/login'});	  

  });

})();