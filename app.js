const express = require('express');
const app = express();
const db = require('./database/connection');

// Configuración para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { nombre: 'Usuario Pug' });
});

app.get('/about', (req, res) => {
    res.render('about', { nombre: 'Usuario Pug' });
});
app.get('/contact', (req, res) => {
    res.render('contact', { nombre: 'Usuario Pug' });
});
app.get('/menu', (req, res) => {
    res.render('menu', { nombre: 'Usuario Pug' });
});

app.engine('ejs', require('ejs').renderFile);

app.get('/ejs', (req, res) => {
    res.render('index.ejs', { nombre: 'Usuario EJS' });
});

app.listen(3000, () => {
    console.log('Servidor listening on port 3000');
});
