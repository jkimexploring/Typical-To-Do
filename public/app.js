$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
});

function addTodos(todos){
    //add todos to page
    todos.forEach(function(todo){
        var newTodo = $('<li>'+todo.name+'</li>');
        newTodo.addClass('task');
        if(todo.completed){
            newTodo.addClass("done")
        }
        $('.list').append(newTodo);
    })
}