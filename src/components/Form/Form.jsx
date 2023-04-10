import React, {useState} from 'react'
import validation from './validation';

const Form = ({login}) => {


const [userData,setForm]= useState({
    email:'',
    password:''
});

const [errors ,setErrors]= useState({
    email:'',
    password:''
});

const handleOnChange = (event) => {
    setForm({
        ...userData,
        [event.target.name] : event.target.value
    })
    
    setErrors(
        validation({
         ...userData,
        [event.target.name] : event.target.value
        }))
    
}

const handleOnSubmit = (event)=>{
    event.preventDefault();
    login(userData);
}

  return (
    <form onSubmit ={handleOnSubmit}>
        <label htmlFor="email">EMAIL</label>
        <input type="email" placeholder='Tu email aqui' name='email' value={userData.value} onChange={handleOnChange}/>
        {errors.email && <p>{errors.email}</p>}
        <label >PASSWORD</label>
        <input type="text" placeholder='Tu password aqui' name='password' value ={userData.value} onChange={handleOnChange}/>
        {errors.password && <p>{errors.password}</p>}
        
        <button>SUBMIT</button>
    </form>
  )
}


export default Form