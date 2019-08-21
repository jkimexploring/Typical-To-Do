var express = require('express')
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
    //send all todos from database
    db.Todo.find().then(function(todos){
        res.json(todos); //find todos
    }).catch(function(err){
        res.send(err); //if there's an error
    })
});

module.exports = router;