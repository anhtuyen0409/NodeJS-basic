//lấy các hàm từ module sử dụng
//import
var myModule = require("./module")

//gọi hàm message từ module
var myMessage = myModule.message("Hello, this is a message");
console.log(myMessage);

//gọi hàm sum từ module
var result = myModule.sum(1,1);
console.log(result);

//gọi hàm sub từ module
var result2 = myModule.sub(2,1);
console.log(result2);