const axios = require('axios');
const { Character } = require('../DB_connection'); 
//! cuando quiero trabajar con DB tengo que traerlo los modelos de la BD, para poder utilizar
//! los metodos de sequilize en mis modelos, ya que un modelo no deja de ser solamente un fn


const getApiData = async() => { //es un controlador
    try {
        
        let i = 1;
        let characters = []; 
        //*lo que voy guardando son promesas
        //[Promise<pending>,Promise<pending>,Promise<pending>....]

        while(i < 6){
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            //Por cada avanze llamo a la api, y guardo esa promesa en Pending
            characters.push(apiData);
            i++;
        }

        //Voy entrando a la info y mapiando y resolviendo todas las promesas
        //por eso uso Promise.all /mapeo, por que cada respuesta de la api->entro a data->
        // luego results-> mapeo results y retorno en mi modelo la info
        //  1erMap[ 2doMap[ {1} {2} {3} {4} {5} ]   ] lo que obtengo
        characters = (await Promise.all(characters)).map(res=>
             res.data.results.map(char=>{
                return ({
                    id: char.id,
                    name: char.name,
                    status: char.status,
                    species:char.species,
                    gender: char.gender,
                    origin: char.origin.name,
                    image: char.image
                })
             }))
             //FORMA 1 
             //recorro [[{1},{2},{3},{4},{5}]] el Array2 y me quede con
             // concateno y me quedo con [{1}{2}{3}{4}{5}] dentro de allCharacters
             let allCharacters = [];
             characters.map(char =>{ allCharacters = allCharacters.concat(char); });
             return allCharacters;

        //busco Traer 100 personajes, la logica del pagino seria de 20 en 20 o similar


    } catch (error) {
        return {errors: error.message}
    }
}

const saveApiData = async() => { //! Carga mi DB con info de los characters obtenido de getApiData()
    try {

        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters);
        //El metodo bulkCreate de sequalize me permite pasarle un array de obj
        //y los crea todos juntos en la DB (los metodos de Sequalize son promesas, por eso uso await/Promise.all)
        // Por cada data de char.. agarra y llena las conlumnas con la info de los personajes
        return allCharacters;
  
    } catch (error) {
        return {error: error.message}
    }
    

}

module.exports = {saveApiData}