//tạo webservice api trả về json với http module
var http = require("http");

//create server
var server = http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);

    //return json data
    var data = {
        "status": 200,
        "message": "this is message",
        "err": false
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000, function(){
    console.log("Server is running on port 3000...");
});