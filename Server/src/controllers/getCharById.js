const { Character } = require ('../DB_connection');
//! EN DB_connection se almacenan mis personajes

const getCharById = async (id) => {
    try {
        const character = await Character.findByPk(id);
        //traigo personajes que tengo en la DB

        return character;

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getCharById;