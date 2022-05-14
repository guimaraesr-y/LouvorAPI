const res = require('express/lib/response');
const EventoDAO = require('../dao/evento.dao')

class Evento {
    constructor() {
        this.titulo = '';
        this.data = '';
        this.horario = '';
        this.dao = new EventoDAO();
    }

    carregarEventos() {
        return new Promise((resolve, reject) => {
            this.dao.carregarEventos().then(data => {
                resolve(data);
            })
        })
    }

    criarEvento(titulo, data, horario) {

    }

    editarEvento() {

    }
}

module.exports = Evento;
