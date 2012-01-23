function waterfall(){
	var args = Array.prototype.slice.call(arguments);
	
	var makeCallback = function(fns, i){
		return function(){
			var args = Array.prototype.slice.call(arguments);
			if(i< ( fns.length - 2 ) ){
				args.push( makeCallback(fns, i+1) );
			}
            
            fns[i+1].apply(null, args);
		};
	};
    
    var callback = makeCallback(args, 0);
    
	args[0](callback);
}


waterfall(function(cb){
    cb(1, 2);
}, function(val1, val2, cb){
    cb(val1 + val2);
}, function(val){
    console.log(val);
});

waterfall(function(cb){
    console.log('start');
    setTimeout(function(){
        cb(1, 2);
    }, 1000);
}, function(val1, val2, cb){
    console.log('second stage');
    setTimeout(function(){
        cb(val1 + val2);
    }, 1000);
}, function(val){
    console.log('Got result', val);
});

waterfall(
    fetchCustomerByName.bind(null,'Google'), 
    getInvoices,
    sum,
    showOnScreen
);