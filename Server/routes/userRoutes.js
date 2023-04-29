const express = require('express');
const userRouter = express.Router();
const getLogin = require('../controllers/getLogin')


//Aca obtengo por query, lo veo en Front
userRouter.get("/",getLogin);




module.exports = userRouter;