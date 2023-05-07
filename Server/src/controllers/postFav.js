const {Favorite} = require('../DB_connection')



//Este controlador guarda en la tabla Favorite el personaje que le
//llega como objeto
const postFav = async (character)=>{
    try {
        
        const {id,name,status,species,gender,image}= character;
        
        if(!id || !name || !status || !species || !gender || !image) throw new Error ('Faltan datos obligatorios master')
        const newFav = {id,name,status,species,gender,image}
        await Favorite.create(newFav); 
        //CREO un favorito en el modelo ('TABLA')
        
        return newFav;

    } catch (error) {
       
        return {error: error.message};
        //! error.message es un STRING
        // por eso envio un OBJ con la propiedad "error": texto
    }
}

module.exports = postFav;