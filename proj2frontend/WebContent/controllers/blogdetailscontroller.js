/**
 * #/getblog/1
 */
app.controller('BlogDetailsCtrl',function($scope,$location,BlogService,$rootScope,$sce,$routeParams){
	var id=$routeParams.id;
	$scope.rejectionTxt=false;
	BlogService.getBlog(id).then(
			function(response){
				$scope.blog=response.data
				$scope.content= $sce.trustAsHtml($scope.blog.blogContent)
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
		
	})
	
	BlogService.hasUserLikedBlog(id).then(
			
			function(response){
				//response.data will either be null or of type BlogPostLikes object
				if(response.data='')//blog is not yet liked by the user
				$scope.isLiked=false//this variable is used to determine color of gliph icon
				else
					$scope.isLiked=true
				
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
	})
	
	$scope.approve=function(blog){
		BlogService.approve(blog).then(function(response){
			$location.path('/blogsnotapproved')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.reject=function(blog){
		//blog.approved==0
		BlogService.reject(blog,$scope.rejectionReason).then(function(response){
			$location.path('/blogsnotapproved')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.showRejectionTxt=function(){
		$scope.rejectionTxt=true;
	}
	
	$scope.updateLikes=function(id){
		BlogService.updateLikes(id).then(
			function(response){
			$scope.blog=response.data
			$scope.isLiked=!$scope.isLiked
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
		})
		
		
	}
	
	$scope.addComment=function(blog,commentTxt){
		$scope.blogComment={}
		$scope.blogComment.blogPost=blog;
		$scope.blogComment.commentTxt=commentTxt;
		BlogService.addComment($scope.blogComment).then(
				function(response){
			$scope.commentTxt=''
				getBlogComments(id)
		},
				function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
				else{
					$scope.exceptionMessage=response.data
				}
		})
	}
	
	function getBlogComments(id){
		BlogService.getBlogComments(id).then(
				function(response){
			$scope.comments=response.data
		},
				function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.onShowComments=function(){
		$scope.showComments=!$scope.showComments;
	}
	
	getBlogComments(id)
})