var express = require('express');
var app = express();
var todoRoutes = require('./routes/todos.js');
var bodyParse = require('body-parser');

app.use(bodyParse.json);
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
   res.send('Hello World')
});
//app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("app is running on port 3000");
});