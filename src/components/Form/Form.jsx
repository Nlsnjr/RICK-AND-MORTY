import { useState } from "react";
import styles from './Form.module.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumbers = /\d/;

function validate(form) {
    let errors = {};

    if(form.email.length > 35){
        errors.email = 'Debe tener menos de 35 caracteres';
    } else if (!regexEmail.test(form.email)) {
        errors.email = 'Debe ser un correo electrónico';
    }
    
    if (!form.password) {
        errors.password = 'Digite una contraseña';
    } else if(form.password.length < 6 || form.password.length > 15) {
        errors.password = 'Tiene que tener entre 6 y 15 caracteres';
    } else if(!regexNumbers.test(form.password)){
        errors.password = 'Tiene que tener minimo 1 numero';
    }
  
    return errors;
}


const Form = ({ login }) => {
    const [ form, setForm ] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        mensaje: ''
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setErrors({
            ...errors,
            [event.target.name]: ""
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        setErrors(validate(form))

        const errorsArray = Object.values(validate(form))

        if (errorsArray.length === 0){
            setForm({
              email: '',
              password: ''
            })
      
            setErrors({
              email: '',
              password: '',
              mensaje:'email y/o password incorreccta'
            })

            login(form);
        }
    }

    return(
        <div className={styles.container} >

            <form className={styles.form} onSubmit={handleSubmit} >

                <label className={styles.title} >LOGIN</label>
                <br/>

                <br/>
                <input name="email" value={form.email} type='text' onChange={handleChange} placeholder="Email" maxLength={35} />
                {errors.email && <br/>}
                {errors.email && <label className={styles.danger} >{errors.email}</label>}
                <p/>

                <br/>
                <input name="password" value={form.password} type='password' onChange={handleChange} placeholder="Password" maxLength={15}/>
                {errors.password && <br/>}
                {errors.password && <label className={styles.danger} >{errors.password}</label>}
                <p/>

                <br/>
                <button type="submit" >LOGIN</button>
                <p/>
                {errors.mensaje && <label className={styles.danger} >{errors.mensaje}</label>}

            </form>
                
        </div>
    );
}

export default Form;