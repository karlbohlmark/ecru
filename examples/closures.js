var fibonacci = (function(){
	var curr = 0;
	var prev = 0;
	return function(){
		n = (prev + curr) || 1;
		prev = curr;
		curr = n;
		return curr;
	};
}());

fibonacci()