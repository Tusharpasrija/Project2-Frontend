/**
 * Job Service
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		return $http.post("http://localhost:8080/proj2middle/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8080/proj2middle/alljobs")
	}
	
	jobService.getJob=function(id){
		return $http.get("http://localhost:8080/proj2middle/getjob/"+id)
	}
	
	return jobService;
})