import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards.jsx';
import axios from 'axios';


function App() {

   let [character, setCharacters] = useState([]);
   

   function onSearch(id) {
      if(id < 827){
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.data)
         .then((data) => {
            if(data.name){
               console.log(data.name);
            setCharacters((oldChars) => [...oldChars, data]);
            }else {
            alert('¡Ingresa una Id Valida!');
         }
      });
      } else alert('Solo hay 826 Personajes, prueba otra vez');
   }


   function onClose(id) {
      id = parseInt(id);
      const char = character?.filter(char => char.id !== id)
      setCharacters(char);
   }


   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Cards onClose={onClose} characters={character}/>
         
      </div>
   );
}

export default App;

