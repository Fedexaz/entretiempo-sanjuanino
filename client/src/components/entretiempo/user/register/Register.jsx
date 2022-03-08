import React from 'react'

function Register() {
  return (
    <div className='row mt-5'>
      <div className="col-md-5 d-flex align-items-center flex-column">
        <h1 className='display-1'>Registrate</h1>
        <h5 className='mb-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en Entretiempo SanJuanino</h5>
        <div className='text-center'>¡Accede a todos lo que ofrece Entretiempo SanJuanino!</div> 
          <ul style={{listStyle: 'none'}} className='mt-3'>
            <li>✔️<small> ¡Podrás ganar muchos premios GRATIS votando por tu equipo favorito!</small></li>
            <li>✔️<small> Accede a la API de entretiempo SanJuanino para poder ver<br />toda la data sobre partidos, equipos, jugadores y más.</small></li>
            <li>✔️<small> </small></li>
          </ul>
      </div>
      <div className="mt-5 col-md-7 mt-1">
        <form method='POST'>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="Ingresa un email" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Ingresá un email válido ej: correo@correo.com.</small>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="email">Contraseña</label>
            <input type="password" name="password" id="password" className="form-control" placeholder="Ingresa una contraseña" aria-describedby="helpId2" />
            <small id="helpId2" className="text-muted">Ingresá una contraseña (car. alfanuméricos).</small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register