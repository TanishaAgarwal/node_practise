var express = require('express');
var app = express();

//set up engine
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('./public'));

//port
app.listen(3000);
console.log('server is running to-do list on http://127.0.0.1:3000/');