const { Character } = require ('../models/Character');

const getAllChars = async () => {
    try {
        const allCharacters = await Character.findall();
        //traigo todos los personajes que tengo en la DB

        return allCharacters;

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllChars;