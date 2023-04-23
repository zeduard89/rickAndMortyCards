const express = require('express');
const cardRouter = express.Router(); //Habilito router de server.js
const getCharById = require('../controllers/getCharById'); //Importo
const getCharDetail = require('../controllers/getCharDetail');


cardRouter.get("/characters/:id",getCharById);           //creo la Ruta
cardRouter.get("/characters/detail/:id",getCharDetail);  //y agrego controller



module.exports = cardRouter;