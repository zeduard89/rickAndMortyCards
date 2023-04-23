const express = require('express');
const server = express();
const cardRouter = require('./routes/cardRoutes')
const userRouter = require('./routes/userRoutes')
const favRouter = require('./routes/favRoutes')

const PORT = 3001;

//! middlewares
//parseará el body de las solicitudes en formato JSON
server.use(express.json());

//middleware de CORS que permitirá el acceso desde cualquier origen, con credenciales 
//y con los métodos HTTP que necesites
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

//! Router
//agregará el prefijo "/rickandmorty".
server.use('/rickandmorty',cardRouter);
server.use('/favorites',favRouter);
server.use('/login',userRouter)


//! Monto el server
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
