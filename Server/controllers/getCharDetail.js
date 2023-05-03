const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail = async(req,res) => {
    
    const{id} = req.params;
    try {
    const {data} = await 
    axios(URL + id)
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
        res.status(500).send(error.message);
    }   
}
module.exports= getCharDetail;