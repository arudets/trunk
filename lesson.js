// положительные через одно
var array  = [1, 3, 5, -4, 8, 9, -8]   
    ,result = "" 
    ;
    for(i = 0, j = 0; i < array.length; i++){
		if(array[i] > 0){		    
			if (!(j%2)){
			result += array[i] + ", ";	
			}				
		j ++;
    }
	}
console.log(result);

// задание 1. пароль
var pswdLength       = 8
    ,pswd            = ""
    ,randDiapasonNum = 0	
    ,diapasons = {
	    0  : "number"
	   ,1 : "capital letter"
	   ,2 : "small letter"
	}
    ,sympols = {
		"number"          : [48, 57]
		,"capital letter" : [65, 90] 
		,"small letter"   : [97, 122]		
	}
    ;
	
for(var i = 0; i < pswdLength; i ++){
  randDiapasonNum = Math.floor(Math.random() * 3);
  firstSymbolNum = sympols[diapasons[randDiapasonNum]][0];
  lastSymbolNum = sympols[diapasons[randDiapasonNum]][1];
  pswd += String.fromCharCode(Math.floor(Math.random() * (lastSymbolNum - firstSymbolNum + 1)) + firstSymbolNum);  	
}

console.log("pswd:", pswd)
