$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos);
    $('#todoInput').keypress(function(event){
        if (event.which == 13){
            createTodo();
        }
    })
});

function addTodo(todo){
    var newTodo = $('<li>'+todo.name+'</li>');
    newTodo.addClass('task');
    if(todo.completed){
        newTodo.addClass("done")
    }
    $('.list').append(newTodo);
}

function addTodos(todos){
    //add todos to page
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function createTodo(){
    //send request to create new todo
    var usrInput = $('#todoInput').val();
    $.post('/api/todos',{name: usrInput})
    .then(function(newTodo){
      $('#todoInput').val('');
      addTodos(newTodo);
    })
    .catch(function(err){
      console.log(err);
    })
  }