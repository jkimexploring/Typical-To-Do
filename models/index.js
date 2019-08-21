var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhoset/todo-api');

mongoose.Promise = Promise;