require ('dotenv').config();
const {User} = require ('../DB_connection')

const DB_USEREMAIL = process.env.EMAIL;
const DB_USERPASSWORD = process.env.PASSWORD;

function login (req,res){
    
    const{password,email} = req.query;

    try {
        if(!password || !email){
            return res.status(500).json({message:"Falta un Email o Password"})
        }

        if(password == DB_USERPASSWORD && email == DB_USEREMAIL){
            res.status(200).json({access:true});
        }else{
            res.status(200).json({access:false});
        }

    } catch (error) {
        res.status(404).json(error);
    }
}

//Funcion ASINCRONICA para que se registre el usuario

async function register(req,res){

    const {password,email,id} = req.body;
    try {
        if(!password || !email) throw new Error('Password or Email is required')
        
        const userFinded = await User.findByPk(id);
        if(userFinded) throw new Error ('Usuario Repetido')

        //si no existen creo el usuario
        const user = await User.create ({password,email,id})
        res.status(200).json(user);

    } catch (error) {
        return res.status(404).send(error.message)

    }
}

module.exports = {
    login,
    register
};