const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');


// Express app
const app = express();

// Connect to Mongodb
const dbURI = 'mongodb+srv://NateC85:OllieJo85!@cluster0.9tcxizm.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// Register view engine
app.set('view engine', 'ejs');

// Middleware & Static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
const blogs = [
  { title: 'Yoshi finds eggs ', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
];


    // res.send('<p>home page</p>');
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 Page, always put at the bottom
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});