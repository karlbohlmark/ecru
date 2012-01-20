function or(){
	var args = Array.prototype.slice.call(arguments);
	
    return args.reduce(function(prev, curr){
		return prev || curr;
	}, false);
}

var vals = ['', 1, false];

console.log(or.apply(null, vals));
