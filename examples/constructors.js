function Person(name){
	if(name){
		this.name = name;
	}
}

var lisa = new Person('lisa');
console.log(lisa.name);


/*
Person.prototype.name = 'Anonymous';
var anon = new Person();

console.log(anon.name);
*/

/*
Person.prototype.name = 'No name';
console.log(anon.name);
*/

/*
var Programmer = function(name, editor){
    Person.call(this, name);
}

Programmer.prototype = new Person();

var linus = new Programmer('Linus', 'emacs');
console.log(linus.name)
*/