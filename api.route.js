const express = require('express');
const Evento = require('./model/evento');
const router = express.Router();

router.use(express.json());

router.get('/get-events', (req, res) => {
    let evento = new Evento();
    res.json(evento.carregarEventos())
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

module.exports = router;