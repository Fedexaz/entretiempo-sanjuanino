import React from 'react'

function Register() {
  return (
    <div>
      <h1 className='d-flex justify-content-center mt-4'>¡Registrate en Entretiempo!</h1>
      <div className="row">
        <form method='POST'>
          <div className="d-flex justify-content-center">
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="Ingresa un email" aria-describedby="helpId" />
              <small id="helpId" className="text-muted">Ingresá un email válido ej: correo@correo.com</small>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="Ingresa un email" aria-describedby="helpId" />
              <small id="helpId" className="text-muted">Ingresá un email válido ej: correo@correo.com</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register