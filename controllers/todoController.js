var bodyParser = require('body-parser');

var data = [{item : 'go to walk'},{item:'go to shop'},{item : 'go to home'}];
var urlencoderParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo',function(req,res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencoderParser , function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};