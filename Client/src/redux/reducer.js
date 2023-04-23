import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [], // Voy pisando siempre esta array
    allCharactersFav: [] //Este queda como base para modificarlo
}

const reducer = (state = initialState, {type,payload}) => {
    switch(type) {
        
        case ADD_FAV:
        return { ...state,
             myFavorites: payload,
             allCharacters: payload };

        
        case REMOVE_FAV:
        return { 
            ...state, 
            myFavorites: payload };    
        
        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter((character)=> character.gender === payload);
            //Filter da un nuevo array  
            return{
                ...state,
                myFavorites:
                payload === 'allCharacters'    //si pay load Es...
                ? [...state.allCharactersFav]  //Devuelvo mi base de fav
                : allCharactersFiltered        //sino muestro lo filtrado
            }
        
        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return{
                ...state,
                myFavorites:
                payload === 'A'
                ? allCharactersFavCopy.sort((a,b)=> a.id - b.id)
                : allCharactersFavCopy.sort((a,b)=> b.id - a.id)

            }

        default:
            return{...state}        
    }
    
}

export default reducer;