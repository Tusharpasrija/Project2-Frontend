/**
 *  BlogService
 */
app.factory('BlogService',function($http){
	var blogService={}
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8080/proj2middle/addblogpost",blog)
	}
	
	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:8080/proj2middle/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:8080/proj2middle/getblogs/"+1)
	}
	
	blogService.getBlog=function(id){
		return $http.get("http://localhost:8080/proj2middle/getblog/"+id)
	}
	
	blogService.hasUserLikedBlog=function(id){
		return $http.get("http://localhost:8080/proj2middle/hasuserlikedblog/"+id)
	}
	
	blogService.approve=function(blog){
		return $http.put("http://localhost:8080/proj2middle/approve",blog)
	}
	
	blogService.reject=function(blog,rejectionReason){
		return $http.put("http://localhost:8080/proj2middle/reject/"+rejectionReason,blog)
	}
	
	blogService.updateLikes=function(id){
		return $http.put("http://localhost:8080/proj2middle/updatelikes/"+id)
	}
	
	blogService.addComment=function(blogComment){
		return $http.post("http://localhost:8080/proj2middle/addcomment",blogComment)
	}
	
	blogService.getBlogComments=function(id){
		return $http.get("http://localhost:8080/proj2middle/blogcomments/"+id)
	}

	
	return blogService;
})