import React from 'react';
import Card from '../Card/Card';


const Cards = ({characters,onClose}) => {//({characters}) DESTRUCTURING

   


   return (
      
   <div >  
      
      {
      
         characters.map(({id,name,status,species,gender,origin,image}) =>{//{characters}
         return (
            <Card 
            key={id}//{characters.id}
            id={id}//id
            name={name}//name... etc
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={onClose}
            />
         )})

         
      }

   </div>

   )
}

export default Cards;
