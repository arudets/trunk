// Учесть что ни у кого нет дня рождения

function getBirthday(){
	var birthdayData = {
		"4" : {
			"9" : {
				"Катя"  : 1981
				,"Миша" : 1999
			}
		}
	}
	,today = new Date()
	,month = today.getMonth() + 1
	,day   = today.getDate()
	,year  = today.getFullYear()
	,age           = 0
	,friendsList   = ""
	,todayBirthday = birthdayData[month][day]
	;
	if(todayBirthday){
	   for (var name in todayBirthday){
		   age = year - todayBirthday[name];
		   friendsList += name + " " + age + "\n"		   
	    }	
    }
	else {
	    showBirthdayMessage();	
	}
	return friendsList;
   }

console.log(getBirthday())

function showBirthdayMessage(){
	console.log("Сегодня ни у кого нет дня рождения (")
}

// расчет к-ва рулонов обоев
var dataForCalculation = {
	       "roomSizes"   : {
			        "length"  : 10
			        ,"width"  : 7
		            } 
	      ,"windowSizes" :{
				     "length" : 2
			        ,"width"  : 1.5  
		            }		  
	      ,"doorSizes"   : {
					"length"  : 2
			        ,"width"  : 1   
		            }		  
		  ,"rollSizes"   : {
					"length"  : 2
			        ,"width"  : 1    
		            }
		  ,"hRoom"       : 2.5
        }
		
function getRollCount(dataForCalculation){
  var roomSquare   = (dataForCalculation["roomSizes"]["length"] + dataForCalculation["roomSizes"]["width"]) * dataForCalculation["hRoom"]
	  ,windowSquare = dataForCalculation["windowSizes"]["length"] * dataForCalculation["windowSizes"]["width"]
	  ,doorSquare   = dataForCalculation["doorSizes"]["length"] * dataForCalculation["doorSizes"]["width"]
	  ,rollSquare = dataForCalculation["rollSizes"]["length"] * dataForCalculation["rollSizes"]["width"]
	  ,squareForRoll = roomSquare - windowSquare - doorSquare	
	  ,rollCount = squareForRoll/rollSquare
	  ;
	return rollCount.toFixed(0)
}
		
console.log ("К-во рулонов обоев: ", getRollCount(dataForCalculation))
