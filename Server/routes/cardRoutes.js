const express = require('express');
const cardRouter = express.Router(); //Habilito router de server.js
//const router = require('express').Router();
const getCharById = require('../controllers/getCharById'); //Importo
const getCharDetail = require('../controllers/getCharDetail');

// :algo  por parametro
cardRouter.get("/characters/:id",getCharById);//creo la Ruta           
cardRouter.get("/characters/detail/:id",getCharDetail);  //y agrego controller
/*
router.get('/character/:id'), (req,res)=>{
    getCharById(req,res);
})
*/


module.exports = cardRouter;