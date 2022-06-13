// import modules
import express from 'express'
// import the todo data
import { todos } from './data/todo-data.js'
import { students } from './data/students-data.js';
// we could also do:
// import * as todoData from './data/todo-data.js'
// but not both! (well, you can, but please don't)

// Create Express app

const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');


// Mount Middleware (app.use)


// Mount routes
app.get('/', function(req,res) {
  res.redirect('/home');
});

app.get('/home', function(req,res){
  res.render('home');
});

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: todos
  })
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students:students
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})