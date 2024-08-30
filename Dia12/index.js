let arrayNomes = [];
let arraySenhas = [];
let nomes = "";
let senhas = 0;
let contador = 0;
let continuar = true;



while(continuar){
let opção = prompt("Digite um número para opção desejada: 1: Cadastrar / 2: Login / 3: Excluir conta / 4: Encerrar operação");

switch(opção){
    // CADASTRANDO CONTA
    case "1":
        arrayNomes[contador] = prompt("Digite seu login:");
        arraySenhas[contador] = prompt("Digite uma senha:");
        contador++;
        console.log("Cadastro feito com sucesso.");
    break;

    // CRIANDO LOGIN
    case "2":
        nomes = prompt("Digite seu login:");
        senhas = prompt("Digite sua senha:");
        let loginValido = true;

    for(let i = 0; i < arrayNomes.length; i++){
        if(nomes == arrayNomes[i] && senhas == arraySenhas[i]){
            loginValido = true;
        }
    }
    
        if(loginValido){
            alert("Login feito com sucesso.");
        } else {
            alert("Login ou senha incorreto!");
        }
    
    break;

        // REMOVENDO LOGIN
    case "3":
        let arrayNomesAux = [];
        let arraySenhasAux = [];
        let contadorAux = 0;
        let nomeExcluir = prompt("Digite seu login:");
    for(let i = 0; i < contador; i++){
        if(nomeExcluir == arrayNomes[i]){
            alert("Login excluido com sucesso.")
        } else {
            arrayNomesAux[contadorAux] = arrayNomes[i];
            arraySenhasAux[contadorAux] = arraySenhas[i];
            contadorAux++
        }
    }
    arrayNomes = arrayNomesAux
    arraySenhas = arraySenhasAux
    contador--

    break;

    case "4":
        continuar = false;
    break;

    default:
        console.log("Opção inválida, programa encerrado.");
    break;
}
}
