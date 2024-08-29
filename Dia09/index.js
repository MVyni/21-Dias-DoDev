
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let peso = parseInt(prompt("Digite seu peso:"));
let altura = parseFloat(prompt("Digite sua altura:"));
let profissão = prompt("Digite sua profissão:");

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissão + ", tem " + altura + "m de altura e pesa " + peso + "kg.");

//VERIFICANDO IDADE
if(idade >= 18){
    console.log("Está liberado para tomar uma gelada!");
} else {
    console.log("Sem gelada para você, volte quando tiver 18 anos.");
} 

//DESCOBRINDO IDADE FRACIONADA
const meses = Math.floor(idade * 12) ;
const semanas = Math.floor(idade * 52) ;
const dias = Math.floor(idade * 365) ;

console.log("Você tem " + meses + " em meses de vida.");
console.log("Você tem " + semanas + " em semanas de vida.");
console.log("Você tem " + dias + " em dias de vida.");

//DESCOBRINDO IMC
let imcUsuario = peso / (altura*altura); 
let totalImc = parseFloat(imcUsuario.toFixed(1));

switch(true){

    case (totalImc < 18.5):
        console.log("Seu IMC é: " + totalImc + " kg/m2 e você está abaixo do peso!");
        break;

    case (totalImc >= 18.5 && totalImc <= 24.9):
        console.log("Seu IMC é: " + totalImc + " kg/m2 e você está no peso ideal!");
        break;

    case (totalImc >= 24.9 && totalImc <= 30):
        console.log("Seu IMC é: " + totalImc + " kg/m2 e você está acima do peso!");
        break;

    case(totalImc > 30):
        console.log("Seu IMC é: " + totalImc + " kg/m2 e você está obeso!");
        break;

    default: 
        console.log("ERRO.");
}

//DESCOBRINDO O ANO DE NASCIMENTO
let anoNascimentoUsu = parseInt(2023 - idade); 
console.log("Você nasceu no ano " + anoNascimentoUsu);

for(let i = anoNascimentoUsu; i <= anoNascimentoUsu + idade; i++){

        console.log(i + " - " + (i - anoNascimentoUsu) + " anos")
    }

//LOOP DO WHILE
do{
    let continuar = prompt("Você deseja inserir os dados novamente? (s / n)");
}while (continuar == "s")
    
    