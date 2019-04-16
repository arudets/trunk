// Коктейль

var myCocktail= {
    "name"	      : "Cocktail's Name"
	  ,"className"  : "cocktail"
	  ,"ingredient" : {
		       "base"       : "Cocktail's Base"
	         ,"additives" : "Cocktail's Additives"
	         ,"fruits"    : "Cocktail's Fruits"
	         ,"alcohol"   : "Cocktail's Alcohol"
	         ,"ice"       : "Cocktail's Ice"
	         ,"greens"    : "Cocktail's Greens"
	         }			 
   }
;

function createCocktail(myCocktail){
  var ingredients = ''
	for (var key in myCocktail["ingredient"]){
		 ingredients += "\n\t<p>" + myCocktail["ingredient"][key] + "</p>"	  	
	}
  cocktail = "<article class =\""+ myCocktail.className +"\">"
	         + "\n\t<h2>"    + myCocktail.name + "</h2>"
			     + ingredients
			     + "\n</article>";
  return cocktail
}

console.log(createCocktail(myCocktail))


// Меню и сабменю

var menu = {
	"home"      : {
		   "name"      : "Home"
		   ,"sub menu" : {
			     "home sub menu item_1"  : "Home sub menu item_1"
			     ,"home sub menu item_2" : "Home sub menu item_2"
			     ,"home sub menu item_3" : "Home sub menu item_3"
		        }
	        }	
	,"about"    : {
		   "name"      : "About Us"
		   ,"sub menu" : {
			     "about us sub menu item_1"  : "About Us sub menu item_1"
			     ,"about us sub menu item_2" : "About Us sub menu item_2"
			     ,"about us sub menu item_3" : "About Us sub menu item_3"
		        }
	        }		
	 
	,"services" : {
		   "name"      : "Services"
		   ,"sub menu" : {
			     "services sub menu item_1"  : "Services sub menu item_1"
			     ,"services sub menu item_2" : "Services sub menu item_2"
			     ,"services sub menu item_3" : "Services sub menu item_3"
		        }
	        }	
	,"contacts" : {
		   "name"      : "Contact Us"
		   ,"sub menu" : {
			     "contact us sub menu item_1"  : "Contact Us sub menu item_1"
			     ,"contact us sub menu item_2" : "Contact Us sub menu item_2"
			     ,"contact us sub menu item_3" : "Contact Us sub menu item_3"
		        }
	        }		
   }
  ,menuClass = {
    	 ul  : "menu"
	    ,li  : "menu_item"
	    ,a   : "menu_link"
	}	
  ,subMenuClass = {
	     ul  : "sub_menu"
	     ,li : "sub_menu_item"
	     ,a  : "sub_menu_link"		
  }
  ;

function createMenu(menuData, menuClass, subMenuClass){
	 var menuList = "<ul class =\""+ menuClass.ul +"\">";
	 for(var fileName in menuData){
		  menuList += "\n\t<li class = \""+ menuClass.li+ "\">"
		           +"\n\t\t<a href =\"#" + fileName + "\" class =\"" + menuClass.a + "\">"
		           + menuData[fileName]["name"]
				       + "</a>" 
				       + "\n\t\t<ul class =\""+ subMenuClass.ul +"\">"				   
				   
	    for(var subMenuName in menuData[fileName]["sub menu"]){				   
				 menuList += "\n\t\t\t<li class = \""+ subMenuClass.li + "\">"
				          +"\n\t\t\t\t<a href =\"#" + subMenuName + "\" class =\"" + subMenuClass.a + "\">"
		              + menuData[fileName]["sub menu"][subMenuName]
					        + "</a>"
					        + "\n\t\t\t</li>"
		    }
		menuList += "\n\t\t</ul>"
				     +"\n\t</li>";
	 }	
	menuList += "\n</ul>";	
	return menuList
}

console.log (createMenu(menu, menuClass, subMenuClass));


// Калькулятор расчета выплат по дифференцированному кредиту

function getCreditSum(sum, period, interest){
   var credit_sum = 0;
   for (var i = 0; i < period ; i++){	
	    credit_sum += sum/period + (sum -(sum/period * i))*(interest/1200);
      console.log("Ваш размер выплаты ", i+1 , " месяц = ", credit_sum.toFixed(2) )
   }
  return credit_sum.toFixed(2)   
}
  
console.log("Общая сумма выплаты: ", getCreditSum(1000, 6, 10))
