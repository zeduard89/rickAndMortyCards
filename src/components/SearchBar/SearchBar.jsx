import {useState} from 'react'

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
      <div>
         <input id='input' onChange ={handleChange} value= {id} type='search'/>
         <br />
         <button onClick={()=> props.onSearch(id)}>Agregar</button>
         <br />
         <button onClick={()=> props.onSearch(random())}> Agregar Random Char</button>

      </div>
   );
}

export default SearchBar
