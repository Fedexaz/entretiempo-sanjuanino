import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useEffect } from 'react'

import { getEquipos, getPartidos, getJugadores} from '../../../redux/actions'

function HomeAPI() {
  const partidos = useSelector(state => state.partidos)
  const equipos = useSelector(state => state.equipos)
  const jugadores = useSelector(state => state.jugadores)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEquipos())
    dispatch(getPartidos())
    dispatch(getJugadores())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div>
      ¡Bienvenido a la API de entretiempo!

      <div>Hay {jugadores.length} jugadores</div>
      <div>Hay {equipos.length} equipos</div>
      <div>Hay {partidos.length} partidos</div>


    </div>
  )
}

export default HomeAPI