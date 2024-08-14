let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let carta = prompt("Você tem carta de motorista?")
let carro = prompt("Você tem carro?")

if (idade <= 18 || carta === "não"){
    console.log(nome + ", você não pode dirigir.")
}else if (idade >= 18 && carta === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir mas não tem carro.")
}else if (idade >= 18 && carta === "sim" && carro === "sim"){
    console.log(nome + ", você será o motorista!")
}