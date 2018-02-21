const http = require('http');
const port = 8080;

const requestHandler = (request,response) => {
	console.log(request.url);
	if (request.url === "/health") {
		response.end('healthy!');
	} else {
		response.end('<H1>Hello Devops Dmeo!</H1>');
	}
	
};

const server = http.createServer(requestHandler);

server.listen(port,(err)=> {
	if (err) {
		return console.error("oops that didn't work");
	}
	console.log(`server is listening on ${port}`);
});