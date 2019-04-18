// транслит преобразовать в класс

function Translit(message){
	this.message = message;
	this.translatedMessage = '';
	
    this.translate = function(){
	   var symbols  = {
		  "и" : "i"
	     ,"в" : "v"
	     ,"а" : "a"
	     ,"н" : "n"
	     ,"о" : "o"
	     ,"м" : "m"
	     ,"к" : "k"		
	    };
	
	  this.message = this.message.toLowerCase();
	  for (var i = 0; i < this.message.length; i++){
		  this.translatedMessage += symbols[this.message[i]] ? symbols[this.message[i]] : this.message[i] // если нет символа то undefine который приводиться к false
		
	    }
	
    console.log (this.message, this.translatedMessage);	
	}	
}

translit1 = new Translit("Иванов Максим");
translit1.translate();


//класс машина
function Car(color, mobility, fuelType){
	this.color = color;
	this.mobility = mobility;	
	this.fuelType = fuelType;
	
    this.fuelConsumption = function(){
		console.log("Расход топлива ")		
	}

    this.speed = function()	{
		console.log("Эх прокачу!")
	}
}

car1 = new Car("white", 10, "petrol");

car1.fuelConsumption();
car1.speed();
