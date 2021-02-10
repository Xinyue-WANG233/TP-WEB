		function showCity() { 
  		let nomVilleSelectionnee = document.getElementById("ville-select").value;
	      let cities = document.getElementsByClassName("city");

  		for (i=0; i<3; i++) {
  		if (cities[i].id == nomVilleSelectionnee) {
         cities[i].style.display= "inline";
   		 } else {
         cities[i].style.display= "none";
  		  }
  		}
	}
						
