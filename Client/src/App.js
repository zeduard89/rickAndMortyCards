import {useState,useEffect} from 'react';
import { Route,Routes, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorites from './components/Favorites/Favorites';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import spaceVideo from './img/space.mp4';
import fondoEstrellas from './img/fondoEstrellas.png';


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = '5d13682840d5.ea46b2043d2ab3aa18ab'

function App() {

   //Funcion LOGIN
   const navigate = useNavigate();

   const [access,setAccess] = useState(false)

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      })
      .catch((error) => console.log(error));
   }

   //cuando cambia Access, compruebo estado/dir
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   //Funcion-Button del NavBar
   function logout() {
    setAccess({
      ...access,
      state:false});
    navigate('/')
   }


   

   //ESTADO CHARACTERS
   let [characters, setCharacters] = useState([]);
   
   //Funcion evita repetidos CHARACTER
   function characterRepeat(id) {
      let repeat = '';
      return repeat = characters.find((character) => character.id === id)
   }

   //Funcion busca en base de datos CHARACTER
   function onSearch(id) {
      if(id > 0 && id < 827) {
         axios(`http://localhost:3001/rickandmorty/characters/${id}`)
            .then(response => response.data)
            .then((data) => {
               if(data.name && !characterRepeat(id)){
               setCharacters((oldChars) => [...oldChars, data]);
               }else{
               alert('¡Ingresa una Id Valida, no repetida');
               }
               }) 
            .catch((error) => console.log(error));
         
      } else alert('Selecciona un numero entre 1 y 826');
   }
  

   //Funcion Cierre card CHRACTERS
   function onClose(id) {
      const charactersFiltered = characters?.filter(character => character.id !== id)
      
      setCharacters(charactersFiltered);
   }

   
   return (
      
      <div className='App'>
         
         <video className='spaceVideo' src={spaceVideo} autoPlay loop muted poster={fondoEstrellas} />

         <NavBar onSearch={onSearch} logout={logout}/>
         <Routes>
            <Route path='/' element={<Form login={login} access={access}/>}/>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path=':error' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
         
      </div>
   );
}

export default App;

