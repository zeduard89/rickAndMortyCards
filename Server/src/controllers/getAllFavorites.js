const {Favorite} = require ('../DB_connection')
//! me traigo de la DB los favoritos almacenados
//Las consultas se realizan a la DB , antes era a la API

const getAllFavorites = async () =>{ //anteriomente 'getCharById'
    try {
        

        const allFavorites = await Favorite.findAll();
        //findAll me trae todo los elementos de la tabla Favorite
        //THUHNDER: primero agregar favoritos

        if(!allFavorites) throw new Error ('No hay Favoritos')
        return allFavorites;

    } catch (error) {
        return {error:error.message};
    }
}

module.exports = getAllFavorites;