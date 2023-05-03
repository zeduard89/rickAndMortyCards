const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req,res) =>{
    
    const{id} = req.params;

    try{
    const {data}= await axios(URL + id) 
        if(data.name){
        const character = {  
            id:id,
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.origin,
            image:data.image,
            status:data.status
        }
        return res.status(200).json(character);
        }
        return res.status(404).json('Not Found')

    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = getCharById;
