(function(){
	'use-strict';
	
	
	angular.module('lotg.login').service('loginService',function($http,configService,$location,$cookieStore){
		
		var service = {};
		
		service.sessionToken = null;
		
		service.saveToken = function(token,stayLoggedIn){
			
			if(stayLoggedIn === true){
				$cookieStore.put('token',token);
			}
			
			$http.defaults.headers.common = {
					'token': token.token
			};
			
			service.sessionToken = token;
		};
		
		service.clearToken = function(){
			delete($http.defaults.headers.common.token);
			
			$cookieStore.remove('token');
			
			service.sessionToken = null;
		};
		service.isLoggedIn = function(){
			if(service.sessionToken === null){
				return false;
			}else{
				return true;
			}
		};
		
		service.logOut = function(){
			service.clearToken();
			
		};
		
		
		service.init = function(){
			
			try {
				var t = $cookieStore.get('token');
//				console.log('serivec init');
//				console.log(t);
				if(t !== null && t !== undefined){
					service.saveToken(t);
				}				
			} catch (e) {
				console.log(e);
				$cookieStore.remove('token');
			}
		};
		service.init();
		
		return service;
		
	});
})();
