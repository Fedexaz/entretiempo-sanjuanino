import moment from 'moment';

export const sortByFecha = (data, type = 1) => {
    return data.sort((a, b) => {
        if (type === 1) {
            if (moment(a.createdAt, "DD/MM/YYYY") < moment(b.createdAt, "DD/MM/YYYY")) {
                return 1;
            }
            if (moment(a.createdAt, "DD/MM/YYYY") > moment(b.createdAt, "DD/MM/YYYY")) {
                return -1;
            }
            return 0;
        }
        else {
            if (moment(a.createdAt, "DD/MM/YYYY") < moment(b.createdAt, "DD/MM/YYYY")) {
                return -1;
            }
            if (moment(a.createdAt, "DD/MM/YYYY") > moment(b.createdAt, "DD/MM/YYYY")) {
                return 1;
            }
            return 0;
        }
    });
};

export const sortByReacciones = (data, type = 1) => {
    return data.sort((a, b) => {
        if (type === 1) {
            if (a.likes.length < b.likes.length) {
                return 1;
            }
            if (a.likes.length > b.likes.length) {
                return -1;
            }
            return 0;
        }
        else {
            if (a.likes.length < b.likes.length) {
                return -1;
            }
            if (a.likes.length > b.likes.length) {
                return 1;
            }
            return 0;
        }
    });
};

export const sortByName = (data, word) => {
    return data.sort((a, b) => {
        if(a.titulo.toLowerCase().includes(word.toLowerCase())) {
            return -1;
        }
        return 1;
    });
};

export const sortByComentarios = (data, type = 1) => {
    return data.sort((a, b) => {
        if (type === 1) {
            if (a.comments[0] === 0 || a.comments[0] < b.comments[0]) {
                return 1;
            }
            if (a.comments[0] > b.comments[0]) {
                return -1;
            }
            return 0;
        }
        else {
            if (a.comments[0] <= b.comments[0]) {
                return -1;
            }
            if (a.comments[0] > b.comments[0]) {
                return 1;
            }
            return 0;
        }
    });
};

export const findByFecha = (data, date) => {
    return data.filter(el => moment(el.createdAt, "DD/MM/YYYY").isSame(moment(date, "DD/MM/YYYY"), 'day'));
};