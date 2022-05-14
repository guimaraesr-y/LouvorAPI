const Dao = require('../dao/dao.config');

class UsuarioDAO {
    constructor() {
        this.dao = new Dao()
    }

    logarUsuario(nome, usuario, password, cookie, cookieExpiry) {
        
    }

    cadastrarUsuario(nome, usuario, password) {
        
    }

    editarUsuario(nome, usuario, password) {

    }
}

module.exports = UsuarioDAO