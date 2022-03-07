import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Route } from 'react-router-dom'


import NavBar from './components/home/navbar/NavBar'
import HomeAPI from './components/api-client/home/HomeAPI'
import HomePrincipal from './components/home/HomePrincipal'
import Register from './components/entretiempo/user/register/Register';
import Login from './components/entretiempo/user/login/Login';

export default function App() {
  return (
    <>
        <NavBar />
        <div className='container-fluid'>
          <Route path='/' exact>
            <HomePrincipal />
          </Route>
          <Route path='/api/home' exact>
            <HomeAPI />
          </Route>
          <Route path='/entretiempo/login' exact>
            <Login />
          </Route>
          <Route path='/entretiempo/register' exact>
            <Register />
          </Route>
        </div>
    </>
  );
}