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
console.log(randomId);
return randomId;
}

   return (
      <div className={styles.searchBar}>
         <input className={styles.button} id='inputSerachBar' onChange ={handleChange} value= {id} type='search'/>
         
         <button className={styles.button} id='buttonSearchBar' onClick={()=> props.onSearch(id)}>Search</button>
        
         <button className={styles.button} onClick={()=> props.onSearch(random())}>Random Character</button>

      </div>
   );
}

export default SearchBar
