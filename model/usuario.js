const UsuarioDAO = require('../dao/usuario.dao');

class Usuario {
    constructor() {
        this.nome = '';
        this.usuario = '';
        this.password = '';
        this.cookies = '';
        this.cookieExpiry = '';
        this.dao = new UsuarioDAO();
    }

    logarUsuario(nome, usuario, password, cookie, cookieExpiry) {
        
    }

    cadastrarUsuario(nome, usuario, password) {
        
    }

    editarUsuario(nome, usuario, password) {

    }
}

module.exports = Usuario;