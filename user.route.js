const express = require('express');
const Usuario = require('./model/usuario');
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

router.put('/edit', (req, res) => {
    const { name, username, password } = req.body;
    let usuario = new Usuario();
    usuario.editarUsuario(name, username, password);
})

module.exports = router;