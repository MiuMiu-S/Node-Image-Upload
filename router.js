

////路由模块
//function route(handle,pathname,response,postData){
//	console.log("关于路由的请求是"+pathname);
//	if(typeof handle[pathname] === 'function'){
//		handle[pathname](response,postData);
//	}else{
//		console.log("no ruquest handler found for"+pathname);
//		response.writeHead(404,{"Content-Type":"text/plain"});
//		response.write("40404040404 not found");
//		response.end();
//	}
//}
//
//exports.route = route;



//路由模块
function route(handle,pathname,response,request){
	console.log("关于路由的请求是"+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response,request);
	}else{
		console.log("no ruquest handler found for"+pathname);
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write("40404040404 not found");
		response.end();
	}
}

exports.route = route;