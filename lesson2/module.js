//tạo module gồm các hàm sum, sub
function message(message){
    return message;
}

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

//export module
module.exports = {
    'message': message,
    'sum': sum,
    'sub': sub
}