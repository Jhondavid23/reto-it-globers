import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contactStyle from './contactForm.module.css';


function ContactForm() {
  const [errors, setErrors] = useState({})
  const [state, handleSubmit] = useForm("xknelkpp");

  //confirmation message
  if (state.succeeded) {
    return <p>¡Gracias por unirte!</p>;
}
 
  //The email entered is verified
  const onChange = (e)=>{
    const {value} = e.target;
    if(!/\S+@\S+\.\S+/.test(value)){
      setErrors({email : "Invalid email"})
    }else{
      return setErrors({})
    }
    console.log(errors)
  } 

 
  return (
      <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        onChange={onChange}
       
        placeholder='Ingresa tu email'
        className={!errors.email ? contactStyle.input : contactStyle.inputred}
      />
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
     
      <button type="submit" disabled={state.submitting} className={contactStyle.button}>
        Enviar
      </button>
      {errors.email && (
          <p className='danger'>{errors.email}</p>
        )}
    </form>
  );
}

export default ContactForm