var express = require('express'),
app = express()
var todoRoutes = require('./routes/todos.js')
app.get('/', function(req, res){
    res.send("Hello World");
});
app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("app is running on port 3000");
})