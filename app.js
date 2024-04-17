const express = require('express');
const app = express();
const db = require('./database/connection');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/pug', (req, res) => {
 res.render('index', { nombre: 'Usuario Pug' });
});

app.engine('ejs', require('ejs').renderFile);

app.get('/ejs', (req, res) => {
 res.render('index.ejs', { nombre: 'Usuario EJS' });
});

app.listen(3000, () => {
 console.log('Servidor listening on port 3000');
});
