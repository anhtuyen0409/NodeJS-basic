//asynchronous (bất đồng bộ) và callback function trong nodejs
//tạo webserver cơ bản với http module
var http = require("http");

//create server
var server = http.createServer(function(req, res){
    //res.writeHead(200, {"Content-Type": "text/plain"});
    //res.write("This is the first server with nodejs");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>This is html</h1>");
    res.end();
});

server.listen(3000, function(){
    console.log("Server is running on port 3000");
});