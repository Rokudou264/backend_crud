const express = require ('express');
const morgan = require ('morgan');
const config = require ('./config');

const usuarios = require('./modulos/usuarios/rutas.js');
const companias = require('./modulos/companias/rutas.js');
const direcciones = require('./modulos/direcciones/rutas.js');
//const error = require('./middleware/errors.js');
const error = require('./red/errors');

const app = express();

//Midleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuracion
app.set('port', config.app.port)

//rutas
app.use('/api/usuarios',usuarios)
app.use('/api/companias',companias)
app.use('/api/direcciones',direcciones)

app.use(error);

module.exports = app;