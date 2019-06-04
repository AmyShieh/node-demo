const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('this is homepage')
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+`/404.html`)
});

app.get('/profile/:id', (req, res) => {
  res.render('profile', { id: req.params.id });
});

app.listen('3000');