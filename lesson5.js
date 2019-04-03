// как выразить через ||?
var userEntry    = "TeST"
    ,captchaText = "test"
    ,captchaOk   = (userEntry == captchaText) || false
    ;  
console.log("captcha", captchaOk)


// задание 1
var string = "test1 test2 test3"
    ;
console.log("slice:", string.slice(0, 5));
console.log("substr:", string.substr(0, 4));
console.log("substring", string.substring(5, 0));

// задание 2
var string     = "я люблю javaScript"
    ,aString    =  string.split(" ")
	;	
console.log("К-во слов в строке:", aString.length);
console.log("К-во символов с пробелом:", string.length);
console.log("К-во символов без пробелов:", aString.join("").length);
console.log("Замена \"люблю\" на \"обожаю\":", string.replace("люблю", "обожаю"));

// задание 3
var string  = "иван петрович сидоров"
    ,aString = string.split(" ")
    ,result = "" 
    ;
   for(i = 0; i < aString.length; i ++){
       result += aString[i][0].toUpperCase() + aString[i].substring(1) + " ";
       }
console.log("ФИО:", result);
