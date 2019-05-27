var bodyParser = require('body-parser');

var data = [{item : 'go to walk'},{item:'go to shop'},{item : 'go to home'}];
var urlencoderParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo',function(req,res){
        res.render('todo',{todos : data});
    });

    app.post('/todo',urlencoderParser, function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo',function(req,res){
        
    });

};