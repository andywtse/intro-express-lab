
import express from 'express';
import { students } from './data/students-data.js';
import { movies } from './data/movies-data.js';


const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');


// Mount Middleware (app.use)


// Mount routes
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/students', function (req, res) {
  res.render('students/index', {
    students: students
  })
});

app.get('/movies', function (req, res) {
  res.render('movies/index', {
    movies: movies
  });
})

// Tell the app to listen on port 3000

app.listen(3000, function () {
  console.log('Listening on port 3000')
});