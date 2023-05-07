import { ADD_FAV,REMOVE_FAV, FILTER,ORDER } from "./action-types";
import axios from "axios";


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/favorites/';
    return async (dispatch) => {
      try{
         // axios.post(direccion a la que le pego, lo que envio x Body)
         //! const {data} = await axios.post(endpoint, character);
         await axios.post(endpoint, character);
         const {data} = await axios.get(endpoint);
         if(!data) throw Error ('No Hay Favoritos');

         return dispatch({
             type: ADD_FAV,
             payload: data,
          });
      }catch(error){
         console.log(error.message);
      } 
    }; 
 };


export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/favorites/${id}`;
    return async (dispatch) => {
      try {
            //const {data} = await axios.delete(endpoint);
            await axios.delete(endpoint);
            const {data} = await axios.get('http://localhost:3001/favorites/');
            if(!data) throw Error ('No Hay Favoritos');

            return dispatch({
               type: REMOVE_FAV,
               payload: data,
            });
      }catch(error){
         console.log(error.message)
      };
    };
 };

 export const filterCards = (gender) => {
    const endpoint = `http://localhost:3001/favorites/filter/${gender}`;
    return (dispatch) => {
       axios.get(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: FILTER,
             payload: data,
        });
       })
       .catch((error) => console.log(error));
    };
 };

 export const orderCards = (order) => {
    const endpoint = `http://localhost:3001/favorites/order/${order}`;
    return (dispatch) => {
       axios.get(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: ORDER,
             payload: data,
        });
       })
       .catch((error) => console.log(error));
    };
 };

