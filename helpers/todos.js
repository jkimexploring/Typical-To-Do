var db = require('../models');

exports.getTodos = function(req, res){
    //send all todos from database
    db.Todo.find().then(function(todos){
        res.json(todos); //find todos
    }).catch(function(err){
        res.send(err); //if there's an error
    })
}

exports.createTodos = function(req, res){
    db.Todo.create(req.body).then(
        function(newTodo){
         res.json(newTodo); // create new todo
        }).catch(function(err){
            res.send(err);
        })
 }

 exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId).then(
        function(findTodo){
            res.json(findTodo)
        }).catch(function(err){
            res.send(err);
        })
}

exports.updateTodos = function(req, res){
    db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new: true}).then(
        function(updateTodo){
            res.json(updateTodo)
        }).catch(function(err){
            res.send(err);
        })
}

exports.deleteTodos = function(req, res){
    db.Todo.remove({_id: req.params.todoId}).then(
        function(){
            res.json({message: "We deleted the todo!"})
        }).catch(function(err){
            res.send(err);
        })
}

module.exports = exports;