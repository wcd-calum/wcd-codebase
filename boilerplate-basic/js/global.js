function addClass(obj) {
	obj.className ? obj.className = "" : obj.className = "show-menu";
}

var menuToggle = document.getElementById('btn-menu');
menuToggle.onclick=function(e){
	e.preventDefault();
	addClass(document.body);
}