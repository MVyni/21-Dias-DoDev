let numero1 = parseInt(prompt("Escolha dois números de 1 a 10"))
let numero2 = parseInt(prompt("Escolha outro número de 1 a 10"))
let operação = prompt("Qual operação matemática você quer usar (soma, subtração, divisão ou multiplicação)?")

let soma = numero1 + numero2
let subtração = numero1 - numero2
let divisão = numero1 / numero2
let multiplicação = numero1 * numero2

switch (operação){
    case "soma":
        console.log("A soma do número " + numero1 + " e o número " + numero2 + " é = " + soma + ".")
        break;

    case "subtração":
        console.log("A subtração do número " + numero1 + " e o número " + numero2 + " é = " + subtração + ".")
        break;

    case "divisão":
        console.log("A divisão do número " + numero1 + " e o número " + numero2 + " é = " + divisão + ".")
        break;    

    case "multiplicação":
        console.log("A multiplicação do número " + numero1 + " e o número " + numero2 + " é = " + multiplicação + ".")
        break;

    default:
        console.log("Opção inválida.")
        break;
}
