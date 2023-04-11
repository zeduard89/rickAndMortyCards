import { NavLink } from 'react-router-dom';
import style from './Card.module.css'


function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (

      <container className={style.card}>
            <button className={style.cardClose} onClick={()=>{onClose(id)}}>X</button>
            <img className={style.cardImg} src={image} alt='' /> 
            <div className={style.cardText}>
               <NavLink to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </NavLink>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{origin.name}</h2>
               <h2>{id}</h2>
            </div>
        
      </container>
   );
}

export default Card;
