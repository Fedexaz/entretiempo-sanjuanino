import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeDesktop from './components/Home/HomeDesktop';
import HomeMobile from './components/Home/HomeMobile';

import Registro from './components/Registro/Registro';
import Login from './components/Login/Login';

import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Routes>
        <Route exact path='/' element={matches ? <HomeDesktop /> : <HomeMobile />} />

        <Route exact path='/registro' element={<Registro />} />
        <Route exact path='/login' element={<Login />} />

        <Route exact path='/cuenta' element={matches ? <HomeDesktop /> : <HomeMobile />} />

        <Route exact path='/pronosticos' element={matches ? <HomeDesktop /> : <HomeMobile />} />
        <Route exact path='/noticias' element={matches ? <HomeDesktop /> : <HomeMobile />} />
        <Route exact path='/partidos' element={matches ? <HomeDesktop /> : <HomeMobile />} />
        <Route exact path='/posiciones' element={matches ? <HomeDesktop /> : <HomeMobile />} />
        <Route exact path='/equipos' element={matches ? <HomeDesktop /> : <HomeMobile />} />
      </Routes>
    </>
  );
}

export default App;

