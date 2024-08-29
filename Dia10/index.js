let array = [];
let indice = [];
let contadorIndice = 0;
let numeroInserido = parseInt(prompt("Digite um numero inteiro e positivo:"));

for(let i = 0; i < 10; i++){
    const elemento = parseInt(prompt("Digite o elemento " (i + 1)));
    array[i] = elemento;
}

for(let i = 0; i < 10; i++){
    if(array[i] === numeroInserido){
        indice[contadorIndice] = i;
        contadorIndice++
    }
}
console.log("O numero " + numeroInserido + " foi encontrado no indice: " + indice);

// exercicio 1.2
console.log("Exercício 1.2");
let array2 = [];
let arrayInvertida2 = [];

for(let i = 0; i < 5; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º primeiro número"));
    array2[i] = numero;
}
console.log("Array: " + array2);

//Array Invertida
let contador = 4
for(let i = 0; i < 5; i++){
    arrayInvertida2[i] = array2[contador];
    contador --  
}
console.log("Array invertida é: " + arrayInvertida2);

// exercício 1.3
console.log("Exercício 1.3");
let array3 = [];
let arrayInvertida3 = [];
let qntsNumeros = parseInt(prompt("Quantos números deseja inserir?"));

for(let i = 0; i < qntsNumeros; i++){
    let numeroInserido3 = parseInt(prompt("Digite o " + (i + 1) +  "º número:"));
    array3[i] = numeroInserido3;
}
console.log("Arraay: " + array3);

//Array invertida
let contador3 = qntsNumeros - 1;
for(let i = 0; i < 5; i++){
    arrayInvertida3[i] = array3[contador3]
    contador3--
}
console.log("Array invertida: " + arrayInvertida3);

// exercício 4

let numeroInserido4 = parseInt(prompt("Digite um numero inteiro e positivo"));
let fibonacci = [];
fibonacci [0] = numeroInserido4 - 1;
fibonacci [1] = numeroInserido4;

for(let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci [i - 1] + fibonacci[i - 2];
}
console.log("Fibonacci: " + fibonacci);