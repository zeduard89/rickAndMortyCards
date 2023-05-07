const {Favorite} = require('../DB_connection');
const {User} = require('../DB_connection');



//Este controlador guarda en la tabla Favorite el personaje que le
//llega como objeto
const postFav = async (character)=>{
    try {
        //Destructuring
        const {id,name,status,species,gender,image,userId}= character;
        
        if(!id || !name || !status || !species || !gender || !image) throw new Error ('Faltan datos obligatorios master')
        const newFav = {id,name,status,species,gender,image,userId}
        
        //! CREO un favorito en el modelo ('TABLA')
        //! Dejar en  constante!!! para poder luego realizar la relacion
        const char = await Favorite.create(newFav); 

        //! Genero relacion User Favorite
        if(userId){  //RELACIONO FAV CON USER
            const user = await User.findByPk(userId);
            console.log(user)
            if(user){
                await user.addFavorite(char);
            }
        }
        
        return char;

    } catch (error) {
       
        return {error: error.message};
        //! error.message es un STRING
        // por eso envio un OBJ con la propiedad "error": texto
    }
}

module.exports = postFav;