
//! esta es la CONFIG de mi DB

require('dotenv').config();
//se requiere directamente por que nos brinda un OBJ procces
//que dentro de su archivo .env guarda la info, de ahi el destructuring
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

//! traemos las tablas
const characterModel = require ('./models/Character');
const favoriteModel = require ('./models/Favorite');
const users = require('./models/User')

//Ej 01 Instancia de Sequelize, genero CONEXION con la DB
//! le indico con que TIPO DB y cual de todas
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
 {logging: false, native: false}
);


//Utilizo el modelo y lo presento a Sequelize, para que lo pueda usar donde lo necesita
//! Creamos las tablas
characterModel(sequelize);
favoriteModel(sequelize);
users(sequelize);

//! Creo Relacion User-FAV 'una tabla intermedia'
const {User,Favorite} = sequelize.models; //destructuring de donde estan las tablas
User.belongsToMany(Favorite,{through:'UserFavorite'});
Favorite.belongsToMany(User,{through:'UserFavorite'});





//EXPORTO los modelos de Sequelize, para poder sincronizarlo con mi server
module.exports = {
    ...sequelize.models,
    sequelize,
};

/*SEQUELIZE
sequelize.define: fn() al aplicarselo a una funcion, permite crear la tabla
sync: fn() levanta la DB y crea las tablas 
sequelize.models: {} inicialmente un OBJ vacio que se llena de nuestras tablas
*/
