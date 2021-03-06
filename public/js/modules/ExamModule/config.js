define(['examApp'],function(app){
	app.config(["$stateProvider","$locationProvider",function($stateProvider,$locationProvider){
		$locationProvider.html5Mode(true);
		$stateProvider.
		state('root',{
			url:'/',
			views:{
				'header':{
					templateUrl:"views/header.html"
				},
				'footer':{
					templateUrl:"views/footer.html"
				},
				'section@':{
					templateUrl:"views/section.html"
				}
			}
		})
		.state('root.register',{
			url:"register",
			views:{
				'section@':{
					templateUrl:"views/register.html",
					controller:"registerController"
				}
			}
		})
	}]);
});