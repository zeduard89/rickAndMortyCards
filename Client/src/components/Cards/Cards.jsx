import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

const Cards = ({characters,onClose,userId}) => {//({characters}) DESTRUCTURING

   
   return (
      
   <div className={styles.divCards}>  
      
      {
      
         characters.map(({id,name,status,species,gender,origin,image}) =>{//{characters}
         return (
            <Card 
            userId={userId}
            key={id}//{characters.id}
            id={id}//id
            name={name}//name... etc
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            />
         )})

         
      }

   </div>

   )
}

export default Cards;
