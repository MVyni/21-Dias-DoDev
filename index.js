class ToDo {
    Texto = ""
    Prioridade = ""
    Feito = false

    constructor(texto, prioridade){
        this.Texto = texto;
        this.Prioridade = prioridade;
    }
}

function CriarTodo(texto, prioridade, array){
    let objetoTodo = new ToDo (texto, prioridade);
    
    if(!array.some((x) => x.Texto == texto)){
        array.push(objetoTodo);
        return objetoTodo;

    }
}

function AtualizarTodo(textoAntigo, textoNovo, array){
    array.forEach(objeto => {
        if(textoAntigo === objetoTodo.Texto){
            objetoTodo.Texto = textoNovo;
            return true;
        } else {
            return false;
        }
    })
}

function ConcluirTodo(array, texto){
    if(array.some((x) => x.Titulo === titulo)){
        if(x.Feito === true){
            x.Feito = false;
        } else {
            x.Feito = true;
        }
        return true;
    } else {
        return false;
    }
}