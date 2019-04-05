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
