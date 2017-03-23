	
	// escriu els atributs de l'element seleccionat
	
	function elemSel() {
		
		// convertim string de la variable a valor numèric
		id = parseInt(localStorage.Elem)-1 ;
		
		// seleccionem un element de l'array 
		el = ListCat001[id];
		
		var ide=document.getElementById("ide");
			ide.innerHTML = el[0];		
		var nom=document.getElementById("nom");
			nom.innerHTML = el[1];
		var adr=document.getElementById("adr");
			adr.innerHTML = el[2];
		var tel=document.getElementById("tel");
			tel.innerHTML = "<a href='tel:" + el[3] + "'>" + el[3];	
		var www=document.getElementById("www");
			www.innerHTML = "<a href='http://" + el[4] + "'>" + el[4] + "</a>";
		var txt=document.getElementById("txt");
			txt.innerHTML = el[6];
		var www=document.getElementById("geo");
			geo.innerHTML = "<a href='p04.html'>MAPA: " 
							+ el[7][0] + " / " + el[7][1] + "</a>";
			localStorage.LatP = el[7][0];
			localStorage.LngP = el[7][1];
			
		var thu=document.getElementById("thu");
		
		for(i=0;i<el[5];i++){		
			thu.innerHTML += "<img src='img/cat001/" + el[0] + "/" + (i+1) + ".jpg'>";	
		};
	};