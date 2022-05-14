const express = require('express');
const router = express.Router();

const Evento = require('./model/evento');

router.use(express.json());

router.get('/get-events', (req, res) => {
    let evento = new Evento();
    evento.carregarEventos().then(eventos => {
        res.json(eventos);
    })
})

router.post('/create-event', (req, res) => {
    const { titulo, data, horario } = req.body;
    let evento = new Evento();
    evento.criarEvento(titulo, data, horario);
    res.end();
})

router.put('/edit-event', (req, res) => {
    const { titulo, data, horario } = req.body;
    let evento = new Evento();
    evento.editarEvento(titulo, data, horario);
    res.end();
})

router.get('/gen-cookie', (req, res) => {
    let value = ""
    let expiryDate = Date.now();
    res.json({"name": value, "expiryDate": expiryDate})
})

module.exports = router;