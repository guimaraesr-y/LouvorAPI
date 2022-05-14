const Dao = require('../dao/dao.config');

class EventoDAO {
    constructor() {
        this.dao = new Dao();
    }

    carregarEventos() {
        return new Promise((resolve, reject) => {
            this.dao.all("SELECT * FROM eventos").then(data => {
                dao.close();
                resolve(data);
            })
        })
    }

    criarEvento() {

    }
    
}

module.exports = EventoDAO;