/**
 *    Angular JS module
 */

var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider) {
	$routeProvider
	.when('/register',{
			templateUrl:'views/registrationform.html',  //all variable and functions added to scope
			controller:'UserController'  //scope
})
.when('/edituserprofile',{
		templateUrl:'views/edituserprofile.html',
			controller:'UserController'
	})

	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobCtrl'
	})
	.when('/alljobs',{
		templateUrl:'views/joblists.html',
		controller:'JobCtrl'
	})
	.when('/getjob/:id',{
		templateUrl:'views/jobdetail.html',
		controller:'JobCtrl'
	})
	.when('/addblog',{
		templateUrl:'views/blogform.html',
		controller:'BlogCtrl'
	})
	.when('/blogsnotapproved',{
		templateUrl:'views/blogsnotapproved.html',
		controller:'BlogCtrl'
	})
	.when('/blogsapproved',{
		templateUrl:'views/blogsapproved.html',
		controller:'BlogCtrl'
	})
	.when('/getblog/:id',{
		templateUrl:'views/blogdetails.html',
		controller:'BlogDetailsCtrl'
	})
	.when('/getblognotapproved/:id',{
		templateUrl:'views/blogapprovalform.html',
		controller:'BlogDetailsCtrl'
	})
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'NotificationCtrl'
	})
	.when('/getnotification/:id',{
		templateUrl:'views/notificationdetails.html',
		controller:'NotificationCtrl'
	})
	.when('/suggestedusers',{
		templateUrl:'views/suggestedusers.html',
		controller:'FriendCtrl'
	})
	.when('/pendingrequests',{
		templateUrl:'views/pendingrequests.html',
		controller:'FriendCtrl'
	})
	.when('/uploadprofilepic',{
		templateUrl:'views/uploadprofilepic.html'
	})
	.when('/friends',{
		templateUrl:'views/friendsList.html',
		controller:'FriendCtrl'
	})
	.when('/searchuser',{
		templateUrl:'views/users.html',
		controller:'UserController'
	})
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatCtrl'
	})
	.when('/home',{
		templateUrl:'views/home.html',

	})
		.otherwise({
		templateUrl:'views/home.html'
	})
})

app.run(function($location,$rootScope,$cookieStore,UserService){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('currentuser')
		
		$rootScope.logout=function(){
		console.log('entering logout')
		UserService.logout().then(
		function(response){
			delete $rootScope.loggedInUser;
			$cookieStore.remove('currentuser')
			$rootScope.message="Successfully logged out..."
			$location.path('/login')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
})