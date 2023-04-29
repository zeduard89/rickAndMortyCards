import { ADD_FAV,REMOVE_FAV, FILTER,ORDER } from "./action-types";
import axios from "axios";


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/favorites/';
    return (dispatch) => {
      // axios.post(direccion a la que le pego, lo que envio x Body)
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       })
       .catch((error) => console.log(error));
    };
 };


export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/favorites/${id}`;
    return (dispatch) => {
       axios.delete(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
        });
       })
       .catch((error) => console.log(error));
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

