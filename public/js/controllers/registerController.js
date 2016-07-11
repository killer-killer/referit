define(['controllers/controllerModule'],function(controllerModule){
	controllerModule.controller('registerController',['$scope','$http',function($scope,$http){
		$scope.registered=function(){
			console.log($scope.user);
			$http({
				method:'POST',
				url:'/register',
				data:$scope.user
			}).then(function successCallback(){
				console.log("success");
			},
			function errCallBack(){
				console.log("error");
			});
		}
	}]);
});