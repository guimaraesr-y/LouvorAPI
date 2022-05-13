const sqlite3 = require('sqlite3').verbose();
const dbPath = "./dao/crescendoemcristo.db"

class DAO {
    constructor() {
        this.db = new sqlite3.Database(dbPath, err => {
            if(err) throw err;
        });
        this.db.serialize(() => {
            this.db.run(
                `CREATE TABLE IF NOT EXISTS usuarios (
                    nome text not null,
                    usuario text not null,
                    senha text not null,
                    cookies text,
                    cookieExpiry
                );`
            )

            this.db.run(
                `CREATE TABLE IF NOT EXISTS eventos (
                    titulo text not null primary key,
                    data varchar(10) not null,
                    horario varchar(5)
                );`
            )

            this.db.run(
                `CREATE TABLE IF NOT EXISTS disponibilidade (
                    idUsuario int not null,
                    idEvento int not null,
                    FOREIGN KEY (idUsuario) REFERENCES usuarios (rowid),
                    FOREIGN KEY (idEvento) REFERENCES eventos (rowid)
                );`
            )
        })
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, (err) => {
                if (err) {
                    reject(err)
                    throw err;
                }
                resolve(1)
            })    
        })
    }

    get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, data) => {
                if (err) {
                    reject(err)
                    throw err;
                }
                resolve(data);
            })
        })
    }

    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, data) => {
                if (err) {
                    reject(err)
                    throw err;
                }
                resolve(data)
            })    
        })
    }
    
    close() {
        this.db.close();
    }
}

module.exports = DAO;