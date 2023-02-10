//đọc ghi file với nodejs
//để làm việc với file ta import module fs
var fs = require("fs");

//mở file
//r+ - cho phép đọc file
fs.open("data.txt", "r+", function(err, file){
    if(err){
        console.log("Open file is error!");
        return;
    }
    console.log("Open file is success!");
});

//có 2 cách để đọc file
//cách 1: đồng bộ
//read file sync
var data = fs.readFileSync("data.txt");
console.log(data.toString());

//cách 2: bất đồng bộ
fs.readFile("data.txt", function(err, data){
    if(err){
        console.log("Error read file");
    }
    else{
        console.log(data.toString());
    }
});

//ghi file
fs.writeFile("data.txt", "This is new data", function(err){
    if(err){
        console.log("Write file error!");
    }
    else{
        fs.readFile("data.txt", function(err, data){
            if(err){
                console.log("Read file is error!");
            }
            else{
                console.log(data.toString());
            }
        })
    }
});

//tạo folder
fs.mkdir("New folder", function(err){
    if(err){
        console.log("Create folder error!");
    }
    else{
        console.log("Create folder success!");
    }
});