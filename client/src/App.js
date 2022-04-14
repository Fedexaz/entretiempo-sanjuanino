import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeDesktop from './pages/Home/HomeDesktop';
import HomeMobile from './pages/Home/HomeMobile';

import Registro from './pages/Registro/Registro';
import Login from './pages/Login/Login';
import MatchDetail from './pages/MatchDetail/MatchDetail';
import Matches from './pages/Matches/Matches';

import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Routes>
        <Route exact path='/' element={matches ? <HomeDesktop /> : <HomeMobile />} />

        <Route exact path='/registro' element={<Registro />} />
        <Route exact path='/login' element={<Login />} />

        <Route exact path='/cuenta' element={<HomeMobile />} />

        <Route exact path='/partido/:id' element={<MatchDetail />} />
        <Route exact path='/partidos' element={<Matches />} />

        <Route exact path='/pronosticos' element={<HomeMobile />} />
        <Route exact path='/noticias' element={<HomeMobile />} />
        <Route exact path='/posiciones' element={<HomeMobile />} />
        <Route exact path='/equipos' element={<HomeMobile />} />
      </Routes>
    </>
  );
}

export default App;

