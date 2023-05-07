const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{ 
    sequelize.define('Favorite',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('Alive','Dead','unknown'),
            allowNull: false
        },
        species:{
           type: DataTypes.STRING,
           allowNull: false 
        },
        gender:{
            type: DataTypes.ENUM('Female','Male','Genderless','unknown'),
            allowNull: false,
            // validate:{    //Una validacion +
            //     isIn:[['Female','Male','Genderless','unknown']]
            // }
        },
        // origin: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        image:{
            type: DataTypes.STRING, //Como suele ser un URL va como string
            allowNull: false,
            // validate:{
            //     isUrl:true //expresion regular REGEX
            // }
        }
    });
}