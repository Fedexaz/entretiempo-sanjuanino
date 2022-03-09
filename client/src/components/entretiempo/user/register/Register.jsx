import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    password2: '',
    terminos: false
  })

  const [error, setError] = useState({
    email: '',
    password: '',
    password2: '',
    terminos: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch(name){
      case 'email':{
        setError({
          ...error,
          email: !value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ig) && value.length ? 'El email es inválido.' : '' 
        })
        break;
      }
        
      case 'password':{
        setError({
          ...error,
          password: !value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/ig) && value.length ? 'La misma debe tener almenos una minúscula, una mayúscula y un número. Teniendo 8 caracteres o más.' : '' 
        })
        break;
      }
        
      case 'password2':{
        setError({
          ...error,
          password2: input.password !== value ? 'Las contraseñas no coinciden.' : ''
        })
        break;
      }

      default:{
        break;
      }
    }
    setInput({
        ...input,
        [name]: value
    })
  }

  const handleSubmit = () => {
    if(validarFormulario()){

    }
    else alert("Faltan completar algunos campos.")
  }

  const validarFormulario = () => {

  }



  return (
    <div className='row mt-5'>
      <div className="col-md-5 d-flex align-items-center flex-column">
        <h1 className='display-1'>Registrate</h1>
        <h5 className='mb-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en Entretiempo SanJuanino</h5>
        <div className='text-center'>¡Accede a todos lo que ofrece Entretiempo SanJuanino!</div> 
        <ul style={{listStyle: 'none'}} className='mt-3'>
          <li>✔️<small> ¡Podrás ganar muchos premios GRATIS votando por tu equipo favorito!</small></li>
          <li>✔️<small> Accede a la API de entretiempo SanJuanino para poder ver<br />toda la data sobre partidos, equipos, jugadores y más.</small></li>
          <li>✔️<small> Realiza un seguimiento de tus equipos favoritos de la Liga Sanjuanina</small></li>
          <li>✔️<small> ¡Entre muchas cosas más!</small></li>
        </ul>
        <p>¿Ya tienes cuenta? <Link to='/entretiempo/login'>Inicia sesión</Link></p>
      </div>
      <div className="mt-5 col-md-7 mt-1">
        <form method='POST' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" style={{fontSize: '20px'}}>Correo electrónico</label>
            <input type="email" name="email" id="email" className={`form-control ${error.email !== '' ? 'is-invalid' : ''} ${ input.email.length > 0 && error.email === '' ? 'is-valid': ''}`} placeholder="Ingresa un email" aria-describedby="helpId" value={input.email} onChange={handleChange} />
            <small id="helpId" className={`${error.email && input.email.length > 1 ? 'text-danger' : 'text-muted'}`}>{error.email ? error.email : null}</small>
          </div>
          
          <div className="form-group mt-4">
            <label htmlFor="password" style={{fontSize: '20px'}}>Contraseña</label>
            <input type="password" name="password" id="password" className={`form-control ${input.password.length > 1 && error.password !== '' ? 'is-invalid': ''} ${input.password.length > 1 && error.password === '' ? 'is-valid': ''}`} placeholder="Ingresa una contraseña" aria-describedby="helpId2" value={input.password} onChange={handleChange} />
          </div>
          
          <div className="form-group mt-4">
            <label htmlFor="password2" style={{fontSize: '20px'}}>Repite la contraseña</label>
            <input type="password" name="password2" id="password2" className={`form-control ${error.password2.length > 1 && input.password !== input.password2 ? 'is-invalid' : ''} ${input.password2.length > 0 && input.password === input.password2 ? 'is-valid' : ''}`} placeholder="Reingresa la contraseña" aria-describedby="helpId2" value={input.password2} onChange={handleChange} />
          </div>
          <div className="form-group mt-4">
            <input type="checkbox" name="terminos" id="terminos" onChange={e => {
              setError({
                ...error,
                terminos: input.terminos ? 'Debes aceptar los términos y condiciones.' : '' 
              })
              setInput({...input, terminos: e.target.checked})
              }
            } />
            <span>&nbsp;Acepto los <Link to='/'>Términos y condiciones.</Link></span>
          </div>
          <br />
          <input type="submit" value="Registrarme" className='btn btn-primary mb-3' />
        </form>
      </div>
    </div>
  )
}

export default Register