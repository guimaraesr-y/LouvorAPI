const Dao = require('../dao/dao.config');

class Evento {
    constructor() {
        this.titulo = '';
        this.data = '';
        this.horario = '';
    }

    carregarEventos() {
        let dao = new Dao();
        return new Promise((resolve, reject) => {
            dao.all("SELECT * FROM eventos").then(data => {
                dao.close();
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
