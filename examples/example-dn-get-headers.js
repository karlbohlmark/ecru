var elements = document.getElementsByTagName('h3');
var matches = []
for(var i = 0;i<elements.length;i++){
    var className = elements[i].className;    
    if( /\blatest\b/.test( className ) ){
        matches.push(elements[i]);
    }
}

onEvent = function(el, event, handler){
	if(el.addEventListener){
		el.addEventListener(event, handler,false);
	}else{
		el.attachEvent(on + event, handler);
	}
}

for(var m =0;m<matches.length;m++){
    onEvent(matches[m], 'click', function(e){
        e.preventDefault();
        var next = e.target.parentNode.nextSibling.nextSibling;
        while(next && next.tagName!= 'UL' )
            next = next.nextSibling;
        
        next.style.display = next.style.display == 'none' ? 'block' : 'none';
    }, false);
}

//console.log(matches);