import React, {useState} from 'react'
import validation from './validation';
import styles from './Form.module.css'
import imgForm from './imgForm/imgForm'
import axios from 'axios';


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
    //! Prototype de como crear un registro
    axios.post("http://localhost:3001/login/register",{password:userData.password,
    email:userData.email,id:1})
            .then(response => response.data)
            .then(({data}) => {
                console.log('Modificar para registro')
               }) 
            .catch((error) => console.log(error.message));

    //
    event.preventDefault();
    login(userData);
}

  return (

    <div >
        <h1 className={styles.tituloFondo} >Rick And Morty Cards</h1>
        
        <div className={styles.bodyForm}>
            <img className ={styles.imagen1} src={imgForm.rickAndMorty} alt="rickAndMorty" />
            <form className={styles.Form} onSubmit ={handleOnSubmit}>
                <div className={styles.accesoRestringido}>AcessoRestringido</div>
                <div className={styles.div1y2}>
                    <label htmlFor="email">EMAIL</label>
                    <hr />
                    <input type="email" placeholder='Tu email aqui' name='email' value={userData.value} onChange={handleOnChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={styles.div1y2}>
                    <label >PASSWORD</label>
                    <hr />
                    <input type="password" placeholder='Tu password aqui' name='password' value ={userData.value} onChange={handleOnChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className={styles.button} >INGRESAR</button>
            </form>
        </div>
    </div>
    
  )
}


export default Form