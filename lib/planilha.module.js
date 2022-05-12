const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Escala de Disponibilidades');

// usersData = {"joao": {"disponivel": ["domingo", "quarta"], "data":"11/11/1111"}}
module.exports = {
    criarPlanilha: (evts = [], usersData = {}) => { 
        let headingColumnNames = evts; // recebe os nomes dos eventos
        const data = []; 

        let users = Object.keys(usersData); // nomes dos integrantes
        users.forEach(user => {
            let json = {}
            evts.forEach(e => {
                json[e] = []
            })
            usersData[user].disponivel.forEach(dispEvt => {
                json[dispEvt].push(user)
            })

            data.push(json)
        })
        
        let headingColumnIndex = 1;
        headingColumnNames.forEach(heading => {
            ws.cell(1, headingColumnIndex++).string(heading);
        });
        
        let rowIndex = 2;
        data.forEach(record => {
            let columnIndex = 1;
            Object.keys(record).forEach(columnName => {
                ws.cell(rowIndex, columnIndex++)
                    .string(record[columnName])
            });
            rowIndex++;
        });
        
        
        wb.write('./public/Disponibilidade.xlsx');
    }
}