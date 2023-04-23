const express = require('express');
const favRouter = express.Router(); //Habilito router de server.js
const {getFav,postFav,deleteFav} = require('../controllers/handleFavorites');


favRouter.get("/get",getFav);
favRouter.post("/post",postFav);
favRouter.delete("/delete/:id",deleteFav);


module.exports = favRouter;