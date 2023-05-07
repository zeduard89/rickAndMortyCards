const express = require('express');
const favRouter = express.Router(); //Habilito router de server.js
const postFav = require('../controllers/postFav');
const getAllFavorites = require('../controllers/getAllFavorites');
const deleteFavoriteById = require('../controllers/deleteFavoriteById');


// favRouter.get("/filter/:gender",filterFav);
// favRouter.get("/order/:order",orderFav);

favRouter.get("/",async (req,res)=>{
        //THUNDER= http://localhost:3001/favorites  GET
    try {

        const allFavorites = await getAllFavorites();

        if(allFavorites.error) throw new Error(allFavorites.error);
        //Obtengo un OBJ error y los manejo como STRING
        return res.status(200).json(allFavorites);

    } catch (error) {
        return res.status(404).send(error.message)
        //En este caso recibo un STRING y no un ObJ
    }

});


favRouter.post("/", async (req,res)=>{
        //THUNDER= http://localhost:3001/favorites POST
        // {
        //     "name":"guille",
        //     "status":"Alive",
        //     "species":"isas",
        //     "gender":"Genderless",
        //     "origin":"earth",
        //     "image":"image.jpg"
        //   }
    try {

        const characterFav = await postFav(req.body);
        //if(characterFav.error) throw new Error(characterFav.error);
        //Envio characterFav.error por que le envio solo el error
        res.status(200).json(characterFav)

    } catch (error) {
        
        return res.status(404).send(error.message);  
    }
});

favRouter.delete("/:id", async (req,res)=>{
        
        //THUNDER= http://localhost:3001/favorites/1
    try {
        const {id} = req.params;
        const deleteFavorite = await deleteFavoriteById(parseInt(id));

        if(deleteFavorite.error) throw new Error(deleteFavorite.error);

        return res.status(200).send(deleteFavorite);

    } catch (error) {
        return res.status(404).send(error.message);
    }

})


module.exports = favRouter;