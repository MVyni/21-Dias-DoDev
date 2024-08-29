arrayNomes = [];
arrayNotas = [];
contador = 0;
somaDasNotas = 0;
mediaGeral = 0;
continuar = true;

while(continuar){
let nome = prompt("Digite o nome do aluno:");
let nota = parseInt(prompt("Digite a nota do aluno:"));
arrayNomes[contador] = nome;
arrayNotas[contador] = nota;
contador++;
let opção = prompt("Deseja inserir mais informaçôes? (s/n)");

if(opção != "s"){
    continuar = false;
} else {
    continuar = true;
}
}
//exibindo informações
console.log("A nota dos alunos é: ")
for(let i = 0; i < arrayNomes.length; i++){
    console.log(arrayNomes[i] + " - " + arrayNotas[i])
}
for(let i = 0; i < arrayNotas.length; i++){
    somaDasNotas += arrayNotas[i];
}
mediaGeral = somaDasNotas / arrayNomes.length;
console.log("A soma da nota de todos os alunos é: " + somaDasNotas);
console.log("A média geral é: " + mediaGeral.toFixed(1));

//exercício 2

let modelos = [];
let anos = [];
let valores = [];

while(continuar){
    
}

