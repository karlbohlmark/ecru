var buttons = document.querySelectorAll('button');

for(var b=0; b<buttons.length; b++){
	var button = buttons[b];
	button.addEventListener('click', function(){
		alert(button.name);
	});
}

var buttons = Array.prototype.slice.call(document.querySelectorAll('button'));
buttons.forEach(function(button){
	button.addEventListener('click', function(){
		alert(button.name);
	});
});


$('button').click(function(){
	alert(this.name);
});