const express = require('express');
const userRouter = express.Router();
const getLogin = require('../controllers/getLogin')



userRouter.get("/user",getLogin);



module.exports = userRouter;