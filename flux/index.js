var express = require("express");
var path = require("path");
var app = new express();
var ejs = require("ejs");
var bodyParser = require('body-parser');  

app.use(bodyParser());
app.engine("html",ejs.__express);
app.set("view engine","html");//设定模板为.html后缀
app.use(express.static(path.join(__dirname,"public"),{maxAge:10}));//设定public目录为资源根目录，duwww.com:3000/public/images/a.jpg变为duwww.com:3000/images/a.jpg

var page = new express();
page.get(/^\/([\w_\/]+).html$/,function(req,res){
	var tpl = "test",par={name:"sfg"},p = req.params[0];
	console.log(p);
	switch(req.params[0]){
		case "validate":
			tpl = "validate";
			par = { title : "表单验证"};
			break;
		default :
			tpl = p.toString();
			par = { title : "测试页面"};
			break
	}
	res.render(tpl,par);  
})

app.use("/page",page);
app.listen(4000,function(){
	console.log("12312...cao ..listener ....3001");
})
