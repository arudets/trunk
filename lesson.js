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
    ,sympols       = [[48, 57], [65, 90], [97, 122]]    
    ;
	
for(var i = 0; i < pswdLength; i ++){
  randDiapasonNum = Math.floor(Math.random() * 3);
	
  firstSymbolNum = sympols[randDiapasonNum][0];
  lastSymbolNum = sympols[randDiapasonNum][1];
	
  pswd += String.fromCharCode(Math.floor(Math.random() * (lastSymbolNum - firstSymbolNum + 1)) + firstSymbolNum);  	
}

console.log("pswd:", pswd)

// задание 2 лотерея
var userAnswer = "583"
    ,m         = 0
    ,n         = 9    
    ,winNumber = ""    
    ;

for(var i = 0; i < 3; i ++){  
  winNumber += Math.floor(Math.random() * (n - m + 1)) + m + ''; 
}

for(var j = 0; j < 3; j ++){
	for(var k = 0;  k < userAnswer.length; k ++){		
		if( winNumber[j] == userAnswer[k] ){		
			userAnswer = userAnswer.replace(userAnswer[k], '');			
			continue	
		}				
	}
}

if (userAnswer.length == 0){
	message = "You won! " + "Win number = " + winNumber;
}
else if(userAnswer.length == 1){
    message = "You guessed 2 digits! "  + "Win number = " + winNumber;		
}
else {
    message = "You lose( "  + "Win number = " + winNumber;	
}
console.log(message); 

// задание 3 календарь
var holidayCalendar = {
	     "4/7/2019" : "Motherhood and Beauty Day (Armenia)"
	     ,"4/9/2019" : "Day of National Unity (Georgia)"
    }
    ,today = new Date
    ,stoday = today.getMonth() +1
      	      + "/"
	      + today.getDate()
	      + "/"
	      + today.getFullYear()
    ,message = ""
    ;
message = holidayCalendar[stoday]? holidayCalendar[stoday] : "No Holiday";	  
console.log(message);
