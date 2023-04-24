import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [], // Voy pisando siempre esta array
    allCharactersFav: [] //Este queda como base para modificarlo
}

const reducer = (state = initialState, {type,payload}) => {
    switch(type) {
        
        case ADD_FAV:
        return { ...state,
             myFavorites: payload};

        
        case REMOVE_FAV:
        return {
            ...state, 
            myFavorites: payload};    
        
        case FILTER:
            return {
                ...state,
                myFavorites: payload};
        
        case ORDER:
            return {
                ...state,
                myFavorites: payload};

        default:
            return{...state}        
    }
    
}

export default reducer;