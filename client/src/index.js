import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import moment from 'moment';
import 'moment/locale/es';
import axios from 'axios';

const fechas = moment();
fechas.locale('es');

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
