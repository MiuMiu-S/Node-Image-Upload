
//var http = require("http");
//
//http.createServer(function(request,response){
//	response.writeHead(200,{"Content-Type":"text/plain"});
//	response.write("hello word!");
//	response.end();
//}).listen(8888);



//var http = require("http");
//
//function onRequest(request,response){
//	response.writeHead(200,{"Content-Type":"text/plain"});
//	response.write("hello word!");
//	response.end();
//}
//
// http.createServer(onRequest).listen(8888);  
 


////服务器模块
//var http = require("http");
//var url = require("url");
//
//function start(route,handle){
//	function onRequest(request,response){
//		var postData = "";
//		var pathname = url.parse(request.url).pathname;
//		console.log("请求"+pathname+"received");
//		
//		request.setEncoding("utf8");
//		
//		request.addListener("data",function(postDataChunk){
//			postData += postDataChunk;
//			console.log("request post data chunk'" + 
//			postDataChunk + "'.");
//		})
//		
//		request.addListener("end",function(){
//			route(handle,pathname,response,postData);
//		})
//
//	}
//	http.createServer(onRequest).listen(8888); 
// 	console.log("server has started");
//}
//
//exports.start = start;


//服务器模块
var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("请求"+pathname+"received");
		route(handle,pathname,response,request);
	}
	http.createServer(onRequest).listen(8888); 
 	console.log("server has started");
}

exports.start = start;