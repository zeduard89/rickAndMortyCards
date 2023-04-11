import React, {useState} from 'react'
import validation from './validation';
import styles from './Form.module.css'
import imgForm from './imgForm/imgForm'

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

    <body className={styles.bodyForm}>
        
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
                <input type="text" placeholder='Tu password aqui' name='password' value ={userData.value} onChange={handleOnChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>

            <button className={styles.button} >SUBMIT</button>
        </form>

    </body>
    
  )
}


export default Form