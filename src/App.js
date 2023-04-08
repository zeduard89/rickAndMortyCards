import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards.jsx';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { Route,Routes } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '5d13682840d5.ea46b2043d2ab3aa18ab'

function App() {

   let [characters, setCharacters] = useState([]);
   
   function characterRepeat(id) {
      let repeat = '';
      return repeat = characters.find((character) => character.id === id)
   }

   function onSearch(id) {
      if(id > 0 && id < 827) {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
            .then(response => response.data)
            .then((data) => {
               if(data.name && !characterRepeat(id)){//
                  console.log(data.name);
               setCharacters((oldChars) => [...oldChars, data]);
               }else{
               alert('¡Ingresa una Id Valida');
               }
         });
      } else alert('Selecciona un numero entre 1 y 826');
   }


   function onClose(id) {
      const charactersFiltered = characters?.filter(character => character.id !== id)
      
      setCharacters(charactersFiltered);
   }


   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>

         </Routes>
      </div>
   );
}

export default App;

