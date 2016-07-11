exports.init=function(app) {
	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname,'/public/index.html'));
	});
	app.post('/register',function(req,res){
		console.log("dsdlksjdl");
		res.send(true);
	});
}