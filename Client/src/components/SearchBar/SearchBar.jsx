import {useState} from 'react'
import styles from '../NavBar/NavBar.module.css'

const SearchBar = (props) => {


const [id,setId] = useState();

const handleChange = (event) =>{
const id = (event.target.value);
setId(id);
}

const random = () => {
let randomId = Math?.floor(Math.random()* 825) + 1;
return randomId;
}

   return (
      <div className={styles.searchBar}>
         <input className={styles.button} id='input' onChange ={handleChange} value= {id} type='search'/>
         
         <button className={styles.button} onClick={()=> props.onSearch(id)}>Agregar</button>
        
         <button className={styles.button} onClick={()=> props.onSearch(random())}>Random Character</button>

      </div>
   );
}

export default SearchBar
