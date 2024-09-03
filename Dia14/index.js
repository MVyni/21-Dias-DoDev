
function infoColaborador(){
    let nome = prompt("Digite seu nome:");
    let salario = prompt("Digite seu salário:");     

    function aumentoSalarial (salario){
        let aumento = 0;
        let percentual = 0

        if(salario <= 1.500){
             aumento = salario * 0.2;
             porcentagem = 20;
        } else if(salario >= 1.501 && salario <= 2.000){
            aumento = salario * 0.15;
            porcentagem = 15;
        } else if(salario >= 2.001 && salario <= 3.000){
            aumento = salario * 0.10;
            porcentagem = 10;
        } else {
            aumento = salario * 0.05
            porcentagem = 5;
        }
        return (aumento, porcentagem)
    }
    let aumento = aumentoSalarial(salario);
    let novoSalario = salario + aumento;

    console.log("Olá " + nome + " seu salário atual é: " + salario + " com " + porcentagem + " % de aumento, e o salário atual de: " + novoSalario);
}
infoColaborador()