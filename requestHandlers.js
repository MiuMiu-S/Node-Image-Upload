
var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(response){
	console.log("start was called");
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="content-type" content="text/html; '+
		'charset=UTF-8"/>'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload" multiple="multiple"/>'+
		'<input type="submit" value="Upload file"/>'+
		'</form>'+
		'</body>'+
		'</html>';
	
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();
	
}

function upload(response,request){
	console.log("upload was called");
	var form = new formidable.IncomingForm();
	form.uploadDir = "tmp";//报错cross-device link not permitted
	form.parse(request,function(error,fields,files){
		console.log("parsimg down");
		fs.renameSync(files.upload.path, "/tmp/test.png");
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("receive image:<br/>");
		response.write("<img src='/show'/>");
		response.end();
	})
	
}

function show(response){
	console.log("request handler 'show' was called.");
	fs.readFile("/tmp/test.png","binary",function(error,file){
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write("error");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/png"});
			response.write(file,"binary");
			response.end();
		}
	})
}

exports.start = start;
exports.upload = upload;
exports.show = show;