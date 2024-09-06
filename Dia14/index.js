let nome = 0;
let salario = 0;

function infoColaborador(){
    nome = prompt("Digite seu nome:");
    salario = parseFloat(prompt("Digite seu salário:"));     
    aumentoSalarial ()
}

function aumentoSalarial (nome, salario){
        let aumento = 0;

        if(salario <= 1.500){
             aumento = 0.2;
        } else if(salario >= 1.501 && salario <= 2.000){
            aumento = 0.15;
        } else if(salario >= 2.001 && salario <= 3.000){
            aumento = 0.10;
        } else {
            aumento = 0.05;
        }
    
    let novoSalario = salario + (salario * aumento);

    console.log("Olá " + nome + " seu salário atual é: " + salario + " e você tem " + (aumento * 100)+ " % de aumento, e o salário reajustado é: " + novoSalario);

        desejaContinuar()
}

function desejaContinuar(){
    let calcular = prompt("Deseja calcular novamente? (s/n)")

    if(calcular == "s"){
        infoColaborador();
    } else {
        console.log("Programa encerrado.");
    }
}

