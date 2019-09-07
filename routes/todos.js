var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res){
   // res.send("Hello from ToDos routes");
   db.Todo.find().then(function(todos){
    res.json(todos); //find todos
    }).catch(function(err){
    res.send(err); //if there's an error
    })
});

router.post('/', function(req, res){
    /*db.Todo.create(req.body).then(
        function(newTodo){
         res.json(newTodo);
        }).catch(function(err){
            res.send(err);
        })*/
        console.log(req.body);
 })

module.exports = router;