	
	// crea llista de categories dins l'element amb ID "llista"
	
	function llistaCats() {
					
		// variable amb l'element que contindrà la llista	
		var llistaCat=document.getElementById("llista");
		
		// carrega la llista de llist_cat.js
		for(i in ListCats){
			elId = ListCats[i][0]; // 001
			elNom = ListCats[i][1]; // nom Categoria
			// crea butons amb ID de la categoria
			llistaCat.innerHTML += "<li><a id='" + elId + "' onclick='guardaLocal(this.id)'>" + elNom + "</a></li><br>" ;
		}
	};
	
	// guardem el ID de la categoria a la variable local localStorage
  	function guardaLocal(id) {
		// asigna id botó a .Cat
		localStorage.Cat = id;	
		// redirigeix a pàgina de l'element
		//window.location = "p02_"+ id +".html";
		// ULL: direccionem sempre a la cat 001 pq encara no hem creat les altres pàgines
		window.location = "p02_"+ "001" +".html";
  	};