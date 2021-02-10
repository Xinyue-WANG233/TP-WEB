	<script> 
		function showCity() { 
  		let nomVilleSelectionnee = document.getElementById("ville-select").value;
	    let cities = document.getElementsByClassName("city");

  		 for (i=0; i<l; i++) {
  		  if (citis[i].id == nomVilleSelectionnee) {
      // garder l'element visible -> ELEMENT.style.display= "none";
   		 } else {
      // cacher l'element -> ELEMENT.style.display= "";
  		  }
  		}
	}
						
		</script>