	
	// crea llista d'elements de la categoria dins l'element amb ID "llista"
	
	function llistaElem() {
						
		// escriure a llista elements array		
		var llistaEl=document.getElementById("llista");
		
		for(i in ListCat001){		
			elId = ListCat001[i][0]; // 001
			elNom = ListCat001[i][1]; // NomRestaurant 1
			// crea butons
			llistaEl.innerHTML += "<li><a id='" 
			+ elId 	+ "' onclick='guardaLocal(this.id)'><img src='img/cat001/" + elId + "/1.jpg'> " 
			+ elNom + "</a></li><br>" ;
		}
	};

	// guardem el ID de l'element a la variable local localStorage
	function guardaLocal(id) {
		// asigna id botó a .Elem
		localStorage.Elem = id;	
		// redirigeix a pàgina de l'element
		window.location = "p03.html";	
	};