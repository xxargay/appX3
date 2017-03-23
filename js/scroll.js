	
	// iScroll: necessari per al correcte scroll de les pàgines
	// body onload --> window.onload =	function
	/*
	var myScroll;
	function loadScroll () {myScroll = new IScroll('#cont');}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	*/
	
	
	var myScroll;
	function loadScroll () {
	myScroll = new IScroll('#cont', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	
	
	