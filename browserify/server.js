var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

var bundle = require('browserify')( { require : [{ jquery : 'jquery-browserify' }, './main' ]});
app.use(bundle);

app.listen(8080);
