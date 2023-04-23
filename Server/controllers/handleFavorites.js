
let myFavorites = [];

const postFav = (req,res) => {
    
    const fav = req.body;
    if(fav.id){
        myFavorites.push(fav);
        return res.status(200).json(myFavorites)
    }else{
        return res.status(500).json({error:'Invalid action'})
        }
    
}

const deleteFav = (req,res) => {
    const {id} = req.params;

    if(id > 0 && id < 826){
        myFavorites = myFavorites?.filter(fav => fav.id !== +id);

        return res.status(200).json(myFavorites);
    }else {
        return res.status(500).json({error:'Debe tener un id entre 0 y 826'})  
    }

}

const getFav = (req,res)=>{
    return res.json(myFavorites)
}



module.exports = {postFav,getFav,deleteFav};