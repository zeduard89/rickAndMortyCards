const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

function getCharDetail (req,res) {
    
    const{id} = req.params;

    axios(URL + id)
    .then((res)=>res.data)
    .then((data)=>{
        
        let character = {  
            id:id,
            name:data.name,
            gender:data.gender,
            species:data.specias,
            origin:data.origin,
            image:data.image,
            status:data.status
        }
        res.status(200).json(character);
    })
    .catch((error)=>{
        res.status(500).send(error.message);
    })    
}
module.exports= getCharDetail