import { Todo } from '../models';

export function getTodos(req, res){
    //send all todos from database
    Todo.find().then(function(todos){
        res.json(todos); //find todos
    }).catch(function(err){
        res.send(err); //if there's an error
    })
}

export function createTodos(req, res){
    Todo.create(req.body).then(
        function(newTodo){
         res.json(newTodo); // create new todo
        }).catch(function(err){
            res.send(err);
        })
 }

 export function getTodo(req, res){
    Todo.findById(req.params.todoId).then(
        function(findTodo){
            res.json(findTodo)
        }).catch(function(err){
            res.send(err);
        })
}

export function updateTodos(req, res){
    Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new: true}).then(
        function(updateTodo){
            res.json(updateTodo)
        }).catch(function(err){
            res.send(err);
        })
}

export function deleteTodos(req, res){
    Todo.remove({_id: req.params.todoId}).then(
        function(){
            res.json({message: "We deleted the todo!"})
        }).catch(function(err){
            res.send(err);
        })
}

