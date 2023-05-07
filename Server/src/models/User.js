const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User',{
        // id:{
        //     type:DataTypes.UUID,//Tipo Caracteres CONVINADOS -d@sk
        //     defaultValue: DataTypes.UUIDV4,// le digo que si no existe lo cree
        //     primaryKey: true,
        //     allowNull: false
        // }
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            // validate:{
            //     isEmail:true //Es una Validacion REGEX
            // }
        },
        password:{
            type: DataTypes.STRING(64),
            allowNull:false,
            // validate: { //que corresponda con el FRONT
            //     is: ["^[a-z]+$",'i']
            // }
        }



    },{timestamps:false});
}