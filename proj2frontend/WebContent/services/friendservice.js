/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8080/proj2middle/suggestedusers")
	}
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8080/proj2middle/addfriend",toId)
	}
	
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8080/proj2middle/pendingrequests")
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8080/proj2middle/acceptrequest",request)
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8080/proj2middle/deleterequest",request)
	}
	
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8080/proj2middle/friends")
	}
	
	return friendService;
})