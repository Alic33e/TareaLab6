const express = require('express');
const app = express();
const db = require('./database/connection');
const Coffee = require('./models/Coffee'); // Asegúrate de ajustar la ruta según tu estructura de archivos

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

app.get('/menu', async (req, res) => {
    try {
        const coffees = await Coffee.find({});
        console.log(coffees)
        res.render('menu', { coffees });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los cafés');
    }
});

app.engine('ejs', require('ejs').renderFile);

app.get('/reservation', (req, res) => {
    res.render('reservation.ejs', { nombre: 'Usuario EJS' });
});

app.get('/service', (req, res) => {
    res.render('service.ejs', { nombre: 'Usuario EJS' });
});

app.get('/testimonial', (req, res) => {
    res.render('testimonial.ejs', { nombre: 'Usuario EJS' });
});

app.listen(3000, () => {
    console.log('Servidor listening on port 3000');
});
