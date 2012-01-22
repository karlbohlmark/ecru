var $ = require('jquery');
var world = require('./world').world;
exports.hello = function(){
	$(function(){
		$('body').html('hello ' + world);
	});
};