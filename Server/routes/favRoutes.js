const express = require('express');
const favRouter = express.Router(); //Habilito router de server.js
const {getFav,postFav,deleteFav,filterFav} = require('../controllers/handleFavorites');


favRouter.get("/",getFav);
favRouter.get("/filter/:gender",filterFav);
favRouter.post("/",postFav);
favRouter.delete("/:id",deleteFav);


module.exports = favRouter;