const Dao = require('./dao.config');

class DisponibilidadeDAO {
    constructor() {
        this.usuario = '';
        this.evento = '';
        this.dao = new Dao();
    }


}

module.exports = DisponibilidadeDAO;