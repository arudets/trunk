// как выразить через ||?
var userEntry    = "TeST"
    ,captchaText = "test"
    ,captchaOk   = (userEntry == captchaText) || false
    ;
    
console.log("captcha", captchaOk)


// задание 1
var string = "test1 test2 test3";

console.log("slice:", string.slice(0, 5));
console.log("substr:", string.substr(0, 4));
console.log("substring", string.substring(5, 0));
