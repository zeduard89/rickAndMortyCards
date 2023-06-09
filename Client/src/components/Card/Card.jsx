import style from './Card.module.css';
import { NavLink,useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';



function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites,userId}){
  


const [isFav,setIsFav] = useState(false);
const location = useLocation();

const handleFavorite = () => {
   
   if(isFav){
      setIsFav(false);
      removeFav(id);
   }
   else{
      setIsFav(true);
      addFav({id,name,species,gender,image,origin,status,userId});
   }
}  

useEffect(() =>{
   myFavorites.forEach((fav) => {
      if(fav.id === id){
         setIsFav(true);
      }
   })
},[]);


return (
   
   <div className={style.card}>
   
      
      {location.pathname !== '/favorites'?<button  className={style.cardClose} onClick={()=>{onClose(id)}}>X</button>: <button className={style.cardClose}></button>}
      <img className={style.cardImg} src={image} alt='' /> 
      <button className={style.corazon} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      <div className={style.cardText}>
          <NavLink to={`/detail/${id}`}>
            <h2 className={style.h2}>{name}</h2>
         </NavLink>
            {/* <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin.name}</h2>
            <h2>{id}</h2> */}
         
      </div>   
   </div>
   
);

}

const mapStateToProps = (state)=>{   //importo de mi estdo GLOBAL
   return{
      myFavorites:state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{  //Despacho Acciones
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card); //Aviso a que componente se esta conectando
