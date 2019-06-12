const express = require('express');

const app = express();
const bodyParse = require('body-parser');

const urlEncodedParser = bodyParse.urlencoded({ extended: false })

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('this is homepage')
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+`/404.html`)
});

app.get('/profile', (req, res) => {
  res.render('profile', { id: 'aaa' });
});

app.post('/profile', urlEncodedParser, (req, res) => {
  console.log(req.body);
  res.render('profile', { id: 'aaa' });
});

app.use('/profile/:id', (req, res, next) => {
  console.log(req.url);
})

app.listen('3000');