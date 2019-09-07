var express = require('express');
var app = express();
var todoRoutes = require('./routes/todos.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send("Hello World");
});
app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("app is running on port 3000");
})