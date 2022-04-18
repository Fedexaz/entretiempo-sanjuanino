import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeDesktop from './pages/Home/HomeDesktop';
import HomeMobile from './pages/Home/HomeMobile';

import Registro from './pages/Registro/Registro';
import Login from './pages/Login/Login';
import MatchDetail from './pages/MatchDetail/MatchDetail';
import Matches from './pages/Matches/Matches';
import Cuenta from './pages/Cuenta/Cuenta';
import Equipos from './pages/Equipos/Equipos';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import Pronosticos from './pages/Pronosticos/Pronosticos';
import MisPronosticos from './pages/MisPronosticos/MisPronosticos';
import Noticias from './pages/Noticias/Noticias';
import NoticiaDetail from './pages/NoticiaDetail/NoticiaDetail';
import Posiciones from './pages/Posiciones/Posiciones';
import TablaDetail from './pages/TablaDetail/TablaDetail';
import Jugadores from './pages/Jugadores/Jugadores';
import JugadorDetail from './pages/JugadorDetail/JugadorDetail';

import Tienda from './pages/Tienda/Tienda';
import BuyPoints from './pages/BuyPoints/BuyPoints';

import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Routes>
        <Route exact path='/' element={matches ? <HomeDesktop /> : <HomeMobile />} />

        <Route exact path='/registro' element={<Registro />} />
        <Route exact path='/login' element={<Login />} />

        <Route exact path='/cuenta' element={<Cuenta />} />

        <Route exact path='/partido/:id' element={<MatchDetail />} />
        <Route exact path='/partidos' element={<Matches />} />

        <Route exact path='/pronosticos' element={<Pronosticos />} />
        <Route exact path='/mis-pronosticos' element={<MisPronosticos />} />
        
        <Route exact path='/noticias' element={<Noticias />} />
        <Route exact path='/noticia/:id' element={<NoticiaDetail />} />
        
        <Route exact path='/posiciones' element={<Posiciones />} />
        <Route exact path='/tabla/:id' element={<TablaDetail />} />

        <Route exact path='/equipos' element={<Equipos />} />
        <Route exact path='/equipo/:id' element={<TeamDetail />} />

        <Route exact path='/jugadores' element={<Jugadores />} />
        <Route exact path='/jugador/:id' element={<JugadorDetail />} />

        <Route exact path='/tienda' element={<Tienda />} />

        <Route exact path='/comprar' element={<BuyPoints />} />
      </Routes>
    </>
  );
}

export default App;

