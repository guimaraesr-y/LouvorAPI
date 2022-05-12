const { criarPlanilha } = require("./planilha.module");

// {"joao": {"disponivel": ["domingo", "quarta"], "data":"11/11/1111"}}
console.log(criarPlanilha(['domingo', 'quarta'], { 
    "joao": {
        "disponivel": ["domingo", "quarta"],
        "data": "11/11/1111"
    },
    "kk": {
        "disponivel": ["quarta"],
        "data": "11/11/1111"
    }
}))