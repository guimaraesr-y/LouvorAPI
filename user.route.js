const express = require('express');
const Usuario = require('./model/usuarios');
const router = express.Router();

router.use(express.json());

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    let usuario = new Usuario();
    usuario.logarUsuario(username, password);
})

router.post('/register', (req, res) => {
    const { name, username, password } = req.body;
    let usuario = new Usuario();
    usuario.cadastrarUsuario(name, username, password);
})

module.exports = router;