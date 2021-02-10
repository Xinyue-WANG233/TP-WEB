		function showCity() { 
  		var nomVilleSelectionnee = document.getElementById("ville-select").value;
	        var cities = document.getElementsByClassName("city");

  		for (i=0; i<l; i++) {
  		if (cities[i].id == nomVilleSelectionnee) {
                ELEMENT.style.display= "none";
   		 } else {
                ELEMENT.style.display= "";
  		  }
  		}
	}
						
