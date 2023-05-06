const {Favorite} = require ('../DB_connection')

const deleteFavoriteById = async(id) => {
    try {
        
        const favoriteFinded = await Favorite.findByPk(id);
        //Busco el Registro

        if(!favoriteFinded) throw new Error ('No Existe ese favorito')
        
        favoriteFinded.destroy();
        //Lo Elimino, se puede usar un WHERE dentro del destroy
        return 'Favorito Eliminado Corractamente';

    } catch (error) {
        return {error:error.message};
    }
}

module.exports = deleteFavoriteById;