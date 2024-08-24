


function Calculadora(num1, num2, operador){

let soma = 0
let subtração = 0
let multiplicação = 0
let divisão = 0
let exponenciação = ""


    Calculadora = parseInt(Calculadora);
    operador = prompt("Qual operação que você deseja? (+ , - , * , / , e)");

    if(operador === "+"){
       soma = num1 + num2;
       operador = soma
       
    } else if(operador === "-"){
        subtração = num1 - num2
        operador = subtração

    } else if(operador === "*"){
        multiplicação = num1 * num2
        operador = multiplicação

    } else if(operador === "/"){
        divisão = num1 / num2
        operador = divisão

    } else if (operador === "e"){
        let contador = 1;
            exponenciação = num1 * num1;
            operador = exponenciação; 

        while(contador < num2 - 1){
            operador = operador * num1;
            contador++;
        }
    } else{
        resultado == undefined || resultado > 1000000
        operador = "ERRO"
    }

return operador;
} 



