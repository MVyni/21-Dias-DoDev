let confirmação = "2";

while (confirmação != "1"){

let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let salário = parseFloat(prompt("Digite seu salário:"));
console.log("Olá " + nome +  " você tem " + idade + " anos e seu salário atual é R$" + salário);
confirmação = prompt("Todas as suas informações estão corretas? (1: Sim / 2: Não)");

//AUMENTO SALARIAL
let aumento = 0.015;
console.log("Sua previsão salarial para 10 anos é:");

for(let ano = 1; ano <= 10; ano++){
    salário += salário * aumento; // salário = salário + (salário * aumento);
    aumento *= 2; // aumento = aumento * 2;
    console.log((2023 + ano) + " - R$" + salário + ".");
}
}












