//Este array simula la BD
let myFavorites = [];
let auxiliarMyFavorites = [];

const postFav = (req,res) => {
    
    const fav = req.body;
    if(fav.id){
        myFavorites.push(fav);
        auxiliarMyFavorites = [...myFavorites];
        return res.status(200).json(myFavorites)
    }else{
        return res.status(500).json({error:'Invalid action'})
        }
}

const deleteFav = (req,res) => {
    const {id} = req.params;
    myFavorites = myFavorites?.filter(fav => fav.id !== id);
    auxiliarMyFavorites = [...myFavorites];
    return res.status(200).json(myFavorites);

}

const getFav = (req,res)=>{
    return res.json(myFavorites)
}


const filterFav = (req,res) =>{
    const {gender} = req.params;
    const filterFavorites = auxiliarMyFavorites?.filter(fav => fav.gender === gender);
    
    gender !== 'allCharacters'
    ?myFavorites = [...filterFavorites]
    :myFavorites = [...auxiliarMyFavorites]

    return res.status(200).json(myFavorites);
}

const orderFav = (req,res) =>{
    const {order} = req.params;
    const allCharactersFavCopy = [...auxiliarMyFavorites]
    
    order === 'A' 
    ?allCharactersFavCopy.sort((a,b)=> a.id - b.id)
    : allCharactersFavCopy.sort((a,b)=> b.id - a.id)

    return res.status(200).json(allCharactersFavCopy);
}



module.exports = {postFav,getFav,deleteFav,filterFav,orderFav};