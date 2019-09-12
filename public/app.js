$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos);
    $('#todoInput').keypress(function(event){
        if (event.which == 13){
            createTodo();
        }
    });
    $('.list').on('click', 'span', function(){
        $(this).parent().remove();
        $.ajax({
            method: 'DELETE',
            url: '/api/todos/'
        })
    })
});

function addTodo(todo){
    var newTodo = $('<li>'+todo.name+'<span>X</span></li>');
    newTodo.addClass('task');
    newTodo.data('id', todo._id);
    if(todo.completed){
        newTodo.addClass("done");
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