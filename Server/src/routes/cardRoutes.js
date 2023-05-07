const express = require('express');
const cardRouter = express.Router(); //Habilito router de server.js
//const router = require('express').Router();
const getCharById = require('../controllers/getCharById'); //Importo
const getAllChars = require('../controllers/getAllChars');


//Genero mi ruta y solicito info de una funcion ASINCRONA 'una promesa'(getAllChars)
cardRouter.get("/allCharacters", async (req, res) => {
    try {
        const allCharacters = await getAllChars();
        res.status(200).json(allCharacters);
    } catch (error) {
        res.status(404).send('Hubo un Problemilla')
    }
})          

cardRouter.get("/characters/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const character = await getCharById(id);
        res.status(200).json(character);

    } catch (error) {
        res.status(404).send('Hubo un Problemilla')
    }
}) 


 cardRouter.get("/characters/detail/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const character = await getCharById(id);
        res.status(200).json(character);

    } catch (error) {
        res.status(404).send('Hubo un Problemilla')
    }
 });




module.exports = cardRouter;