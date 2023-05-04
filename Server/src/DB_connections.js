require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const characterModel = require ('./models/Character');

//Ej 01 Instancia de Sequelize
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
 {logging: false, native: false}
);


//Ejericio 03 importa el modelo y ejecuta pasandole args intancia de Sequelize ya creada
characterModel(sequelize);

module.exports = {
    ...sequelize.models,
    sequelize,
};