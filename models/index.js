var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1:27017/todo-api', { useNewUrlParser: true }) .then
(() => console.log('MongoDB Connected'))
.catch(err => console.log('Mongo Error:'));

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");