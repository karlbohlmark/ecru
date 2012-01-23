var targets = ['ecru', 'sweden', 'world'];
var helloers= [];
for(var i = 0;i<3;i++){
    console.log(targets[i]);
    
	helloers.push(function(){
        console.log('hello ' + targets[i]);
	});
}

helloers[0]();
helloers[1]();
helloers[2]();