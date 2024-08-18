let valor = parseInt(prompt("Digite um valor de 0 a 100"))

for (let i = 0; i<= valor; i++){
    console.log (i)
}

console.log("outro for")

for (i = 0; i <= 50; i += 5){
    console.log (i)
}

console.log("outro for")

for (i= 50; i>= 0; i-= 5){
    console.log(i)
}

// exercicio 2: 

let valor = parseInt(prompt("Digite um número para saber a tabuada dele."))


for (let i = valor; i <= valor + 2; i++ ) // esse primeiro "for" é para dizer que vai começar no valor inserido pelo usuário e vai executar +2 números consecutivos. 
{
    console.log("A tabuada de " + i + " é:")

    for (let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + i*j)
    }
}