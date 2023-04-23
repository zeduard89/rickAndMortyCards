
let myFavorites = [{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive"
},
{
    "id": 2,
    "name": "Rick Sanchez",
    "status": "Alive"
},
{
    "id": 3,
    "name": "Rick Sanchez",
    "status": "Alive"
}];

const postFav = (req,res) => {
    
    const fav = req.body;
    if(fav.id){
    myFavorites.push(fav);
    res.status(200).json(myFavorites)
    }else{
    res.status(500).json({error:'Invalid action'})
    }
    
}

const deleteFav = (req,res) => {
    const {id} = req.params;

    if(id > 0 && id < 826){
        myFavorites = myFavorites?.filter(fav => fav.id !== +id);

        res.status(200).json(myFavorites);
    }else {
        res.status(500).json({error:'Debe tener un id entre 0 y 826'})  
    }

}



module.exports = {postFav,deleteFav};