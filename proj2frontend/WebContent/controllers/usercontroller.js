/**
 *  UserController-to receive data from view and to send view
 *  $scope = add variables and functions
 */
	app.controller('UserController',function($scope,$rootScope,$location,UserService,$cookieStore){
	$scope.registerUser=function(user){
		console.log('Entering usercontroller registerUser funtion in frontend..' + user)
		UserService.registerUser(user).then(
		function(response){//success{200,user}
			alert('Registrated Successfully..')
			$location.path('/home')
		},function(response){//error {409/500}
			$scope.error=response.data
		})
			
		
	}


	$scope.login=function(user){
		UserService.login(user).then(function(response){
			$rootScope.loggedInUser=response.data
			$cookieStore.put('currentuser',response.data)
			$location.path('/home')
		},function(response){
			$scope.error=response.data
			$location.path('/login')
		})
	}
	
	//statement will automatically get executed when controller get loaded
	
	if($rootScope.loggedInUser!=undefined){
	UserService.getUser().then(
			function(response){
		$scope.user=response.data//result of query select * from user where email=?
	},
	function(response){
		if(response.status==401)
			$location.path('/login')
		else
			$scope.error=response.data
		
	})
	
	$scope.updateUser=function(user){
		UserService.updateUser(user).then(function(response){
			alert('updated user profile successfully!!')
			$rootScope.loggedInUser=response.data
			$cookieStore.put('loggedInUser',response.data)
			$location.path('/home')
		},function(response){
			if(response.status==401)
				$location.path('/login')
				else
					$scope.error=response.data
		})
	}
	
	$rootScope.searchUser=function(user){
		UserService.searchUser(user).then(
				function(response){
			$scope.users=response.data
		},
				function(response){
			$scope.error=response.data
			$location.path('/login')
		})
	}
}
})
