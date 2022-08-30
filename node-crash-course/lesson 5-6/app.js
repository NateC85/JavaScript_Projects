const express = require('express');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.render('index', { title: 'Home' });
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