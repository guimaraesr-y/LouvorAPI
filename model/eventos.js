const Dao = require('../dao/dao.config');

class Eventos {
    constructor() {
        this.eventos = [];
        this.loadEvents();
    }

    loadEvents() {
        let dao = new Dao();
        dao.all("SELECT * FROM eventos").then(data => {
            console.log(data)
        })
        //console.log(data)
    }
}

let eventos = new Eventos()
