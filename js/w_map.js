	
	/////// latitud i longitud del POI
			var latP = localStorage.LatP;
			var lngP = localStorage.LngP;
			
	/////// latitud i longitud de USUARI		
			var map, latU, lngU;
	
			var icon = 'maps/poi0.png';
	
	$(function(){
	
		function geolocalizar(){
			GMaps.geolocate({
			  success: function(position){
				latU = position.coords.latitude;  // guarda coords en lat y lng
				lngU = position.coords.longitude;
				
				
				map = new GMaps({  // muestra mapa centrado en coords [lat, lng]
				  el: '#map',
				  lat: latP,
				  lng: lngP,
				  
				  // opcions controls mapa
				  zoomControlOpt: {		// mostra opcions dels controls 
					style : 'SMALL',
					position: 'TOP_LEFT'
				   },
				  panControl : false,
				  streetViewControl : false,
				  mapTypeControl: false,
				  overviewMapControl: false
				  //////////////////////////////////////////////////////
				  
				});
				map.addMarker({ lat: latP, lng: lngP, icon: icon, infoWindow: {content: '<p>INFO text?</p>'}});  // marcador a POI
				map.addMarker({ lat: latU, lng: lngU, icon: icon});  // marcador a USUARI
				
		////////////////////////////////estils de mapa: https://snazzymaps.com/	
		///// https://developers.google.com/maps/documentation/javascript/styling#styling_the_default_map
		
				var styles = [
				  {
					stylers: [
					  { hue: "#204040" },
					  { saturation: -10 }
					]
				  },{
					featureType: "road",
					elementType: "geometry",
					stylers: [
					  { lightness: 80 },
					  { visibility: "simplified" }
					]
				  },{
					featureType: "road",
					elementType: "labels",
					stylers: [
					  { visibility: "off" }
					]
				  }
				];
	
				map.setOptions({styles: styles});
			
		////////////////////////////////////////////////////////////
	
			
			  },
			  error: function(error) { alert('Geolocalizació fallida: '+error.message); },
			  not_supported: function(){ alert("Geolocalització no suportada pel seu dispositiu"); },
			});
		};
		  
		// invoquem la funció 
		geolocalizar(); 
		
		
		// ressalta la opció PUNT
		$("#punt").css({"background-color":"#efc"});
		
		function ruta(){
		   // mostra ruta 
			map.drawRoute({
			  origin: [latU, lngU],  		// origen en coordenades usuari
			  destination: [latP, lngP],	// destinació en coordenades POI
			  travelMode: 'driving',
			  strokeColor: '#408284',
			  strokeOpacity: 0.6,
			  strokeWeight: 5
			});
			
			//ressalta la opció RUTA
			$("#punt").css({"background-color":"#fff"});
			$("#centre").css({"background-color":"#fff"});
			$("#veure").css({"background-color":"#efc"});
		};
	
	
		function centrarU() {
			map.setCenter(latU, lngU);	
			
			//ressalta la opció POSICIÓ
			$("#punt").css({"background-color":"#fff"});
			$("#centre").css({"background-color":"#efc"});
			$("#veure").css({"background-color":"#fff"});
		};
		
		function centrarP() {
			map.setCenter(latP, lngP);	
			
			//ressalta la opció:
			$("#punt").css({"background-color":"#efc"});
			$("#centre").css({"background-color":"#fff"});
			$("#veure").css({"background-color":"#fff"});
		};
		  
	 
		
		$("#veure").on('click', ruta);
		$("#veure").on('tap', ruta);
		
		$("#centre").on('click', centrarU);
		$("#centre").on('tap', centrarU);
		
		$("#punt").on('click', centrarP);
		$("#punt").on('tap', centrarP);
		
		  
	});
