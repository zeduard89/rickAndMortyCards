import {useState,useRef} from 'react'

const SearchBar = (props) => {


const [id,setId] = useState();

const handleChange = (event) =>{
const id = (event.target.value);
setId(id);
}



   return (
      <div>
         <input id='input' onChange ={handleChange} value= {id} type='search'/>
         <button onClick={()=> props.onSearch(id)}>Agregar</button>

      </div>
   );
}

export default SearchBar
