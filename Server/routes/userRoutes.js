const express = require('express');
const userRouter = express.Router();
const getLogin = require('../controllers/getLogin')



userRouter.get("/",getLogin);



module.exports = userRouter;