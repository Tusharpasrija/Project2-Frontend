/**
 *  User Service to makeserver side calls
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){

	//format of user-JSON 
	console.log('in userservice')
	console.log(user)	
	return $http.post("http://localhost:8080/proj2middle/registeruser",user)
	}
	
	userService.login=function(user){
		console.log('userservice -> login')
		console.log(user)
		return $http.post("http://localhost:8080/proj2middle/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8080/proj2middle/logout")
	}
	
	userService.getUser=function(){
		return $http.get("http://localhost:8080/proj2middle/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8080/proj2middle/updateuser",user)
	}
	
	userService.searchUser=function(user){
		return $http.get("http://localhost:8080/proj2middle/searchuser/"+user)
	}
	
	return userService;
	
})