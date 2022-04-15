import moment from 'moment';

export const showToday = (data) => {
  return data.filter(el => moment(el.fechaJuego, "DD/MM/YYYY").isSame(moment(), 'day'));
};

export const sortByFecha = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (moment(a.fechaJuego, "DD/MM/YYYY") < moment(b.fechaJuego, "DD/MM/YYYY")) {
        return -1;
      }
      if (moment(a.fechaJuego, "DD/MM/YYYY") > moment(b.fechaJuego, "DD/MM/YYYY")) {
        return 1;
      }
      return 0;
    }
    else {
      if (moment(a.fechaJuego, "DD/MM/YYYY") < moment(b.fechaJuego, "DD/MM/YYYY")) {
        return 1;
      }
      if (moment(a.fechaJuego, "DD/MM/YYYY") > moment(b.fechaJuego, "DD/MM/YYYY")) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByLocalName = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.teamLocal < b.teamLocal) {
        return -1;
      }
      if (a.teamLocal > b.teamLocal) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.teamLocal < b.teamLocal) {
        return 1;
      }
      if (a.teamLocal > b.teamLocal) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByVisitanteName = (data, type) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.teamVisitante < b.teamVisitante) {
        return -1;
      }
      if (a.teamVisitante > b.teamVisitante) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.teamVisitante < b.teamVisitante) {
        return 1;
      }
      if (a.teamVisitante > b.teamVisitante) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByCancha = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.cancha < b.cancha) {
        return -1;
      }
      if (a.cancha > b.cancha) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.cancha < b.cancha) {
        return 1;
      }
      if (a.cancha > b.cancha) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByState = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.jugado < b.jugado) {
        return -1;
      }
      if (a.jugado > b.jugado) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.jugado < b.jugado) {
        return 1;
      }
      if (a.jugado > b.jugado) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByGolesLocal = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.golesLocal < b.golesLocal) {
        return -1;
      }
      if (a.golesLocal > b.golesLocal) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.golesLocal < b.golesLocal) {
        return 1;
      }
      if (a.golesLocal > b.golesLocal) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByGolesVisitante = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.golesVisitante < b.golesVisitante) {
        return -1;
      }
      if (a.golesVisitante > b.golesVisitante) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.golesVisitante < b.golesVisitante) {
        return 1;
      }
      if (a.golesVisitante > b.golesVisitante) {
        return -1;
      }
      return 0;
    }
  });
};

export const sortByEvento = (data, type = 1) => {
  return data.sort((a, b) => {
    if (type === 1) {
      if (a.evento < b.evento) {
        return -1;
      }
      if (a.evento > b.evento) {
        return 1;
      }
      return 0;
    }
    else {
      if (a.evento < b.evento) {
        return 1;
      }
      if (a.evento > b.evento) {
        return -1;
      }
      return 0;
    }
  });
};

export const findByLocalName = (data, name) => {
  return data.filter(el => el.teamLocal.toLowerCase() === name.toLowerCase());
};

export const findByVisitantelName = (data, name) => {
  return data.filter(el => el.teamVisitante.toLowerCase() === name.toLowerCase());
};

export const findByCancha = (data, name) => {
  return data.filter(el => el.cancha.toLowerCase() === name.toLowerCase());
};

export const findByState = (data, state) => {
  return data.filter(el => el.jugado === state);
};

export const findByFecha = (data, date) => {
  return data.filter(el => moment(el.fechaJuego, "DD/MM/YYYY").isSame(moment(date, "DD/MM/YYYY"), 'day'));
};

export const findByEvento = (data, name) => {
  return data.filter(el => el.evento.toLowerCase() === name.toLowerCase());
};