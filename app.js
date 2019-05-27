var express = require('express');
var app = express();

//set up engine
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('./public'));