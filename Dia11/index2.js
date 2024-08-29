let continuar = true;
let arrayModelos = [];
let arrayAnos = [];
let arrayValores = [];
let contador = 0;
while(continuar){
    let modelo = prompt("Digite o modelo do carro: ");
    let ano = parseInt(prompt("Digite o ano do carro: "));
    let valor = parseInt(prompt("Digite o valor do carro: ")).toFixed(3);
    arrayModelos[contador] = modelo;
    arrayAnos[contador] = ano;
    arrayValores[contador] = valor;
    contador++

    let parar = prompt("Deseja adicionar mais carros? (s/n)");
    if(parar === "n"){
        continuar = false;
    }
}
console.log("Os modelos, anos e valores dos carros são:");
for(let i = 0; i < arrayModelos.length; i++){
    console.log(arrayModelos[i] + ", " + arrayAnos[i] + " Valor: " + arrayValores[i]);
}
// ordenando os por preço
for(let i = 0; i < arrayValores.length - 1; i++){
    for(j = 0; j < arrayValores.length - i - 1; i++){
        if(arrayValores[j] > arrayValores[j + 1]){

            let maiorValor = arrayValores[j];
            arrayValores[j] = arrayValores[j + 1];
            arrayValores[j + 1] = maiorValor;

            let modeloMaiorValor = arrayModelos[j];
            arrayModelos[j] = arrayModelos[j + 1];
            arrayModelos[j + 1] = modeloMaiorValor;

            let anoMaiorValor = arrayAnos[j];
            arrayAnos[j] = arrayAnos[j + 1];
            arrayAnos[j + 1] = anoMaiorValor;
        }
    }
}
console.log("Os modelos dos carros ordenados pelo menor valor é: ");
for(let i = 0; i < arrayModelos.length; i++){
    console.log(arrayModelos[i] + ", " + arrayAnos[i] + " Valor: " + arrayValores[i]);
}



