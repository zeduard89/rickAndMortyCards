const express = require('express');
const userRouter = express.Router();
const {login,register} = require('../controllers/login')


//Aca obtengo por query, lo veo en Front
userRouter.get("/",login);
userRouter.post("/register",register);




module.exports = userRouter;