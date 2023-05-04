const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail = async(req,res) => {
    
    try {
    const{id} = req.params;
    const {data} = await axios(URL + id)
    
    if(!data.name) throw new Error(`ID: ${id} Not Found`);
    
    let character = {  
        id:id,
        name:data.name,
        gender:data.gender,
        species:data.species,
        origin:data.origin,
        image:data.image,
        status:data.status
    }
    res.status(200).json(character);
    
    }catch(error){
        return error.message.includes('ID') //error es un OBJ
        ? res.status(404).send(error.message)//ERR USER
        :res.status(500).send(error.message)//ERR SERVIDOR
    }   
}
module.exports= getCharDetail;