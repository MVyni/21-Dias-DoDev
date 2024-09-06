
let nomes = [];
let senhas = [];

function cadastro(){
    nomes.push = prompt("Digite um nome:");
    senhas.push = prompt("Digite uma senha:");
}

function fazerLogin(nome, senha){
    let index = nomes.indexOf(nome);
    if(index !== -1 && senhas[index] == senha){
        return true;
    } else {
        return false;
    }
    }

function excluirConta(nome){
    let index = nomes.indexOf(nome);
    if(index !== -1){
        nomes.splice(index, 1);
        senhas.splice(index, 1);
        console.log("Cadastro excluido com sucesso!");
    } else {
        console.log("Usuário não encontrado.");
    }

}

continuar = true;
while(continuar){
    let opcao = prompt("O que você deseja? 1: Cadastrar / 2: Login / 3: Excluir ou 4: Encerrar");

    switch(opcao){
        case "1":
            cadastro();
            break;

        case "2":
            let nome = prompt("Digite o login:");
            let senha = prompt("Digite a senha:");
            let login = fazerLogin(nome, senha);
            if(login){
                alert("Login feito com sucesso!");
            } else {
                alert("Login ou senha invalido!");
            }
            break;

        case "3":
             nome = prompt("Digite o login que deseja excluir:");
            excluirConta(nome);
            break;
        case "4":
            continuar = false;
            break;
            
        default:
            console.log("Opção inválida.")
    }
}