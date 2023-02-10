//create a 'hello world' program run with node
//console.log('Hello world! This is my first nodejs program.');

//create a webserver basic
//tạo webserver để nhận request từ user và trả về phía client
//import thư viện
var http = require("http"); //require để import thư viện, http được cung cấp sẵn trong nodejs

//create server
//function có 2 tham số req (request), res (responve)
var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.write("Hello, this is my first webserver with NodeJS");
    res.end();
});

//server lắng nghe cổng client truy cập
server.listen(3000, function(){
    console.log("Server running on port 3000 success!");
});