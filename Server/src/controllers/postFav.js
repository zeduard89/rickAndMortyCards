const {Favorite} = require('../DB_connection')



//Este controlador guarda en la tabla Favorite el personaje que le
//llega como objeto
const postFav = async (character)=>{
    try {
        
        const {name,status,species,gender,origin,image}= character;
        
        if(!name || !status || !species || !gender || !origin || !image) throw new Error ('Faltan datos obligatorios master')
        
        const newFav = {name,status,species,gender,origin,image}
        
        await Favorite.create(newFav); 
        //CREO en el modelo ('TABLA')

        return newFav;

    } catch (error) {
       
        return {error: error.message};
        //! error.message es un STRING
        // por eso envio un OBJ con la propiedad "error": texto
    }
}

module.exports = postFav;