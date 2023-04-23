const express = require('express');
const cardRouter = express.Router(); //Habilito router de server.js
const getCharById = require('../controllers/getCharById'); //Importo
const getCharDetail = require('../controllers/getCharDetail');
const {postFav,deleteFav} = require('../controllers/handleFavorites');


cardRouter.get("/character/:id",getCharById);           //creo la Ruta
cardRouter.get("/character/detail/:id",getCharDetail);  //y agrego controller
cardRouter.post("/favorites",postFav);
cardRouter.delete("/favorites/:id",deleteFav);


module.exports = cardRouter;