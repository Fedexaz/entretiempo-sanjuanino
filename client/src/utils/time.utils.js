import moment from 'moment';

export const timeLeft = (fecha) => {
  return moment(fecha, "DD/MM/YYYY").fromNow();
};

export const seHaJugado = (fecha) => {
  const hoy = moment();
  const date = moment(fecha, "DD/MM/YYYY");
  return date.diff(hoy, 'days') > 0 ? true : false;
};