let fome = prompt("Você está com fome?")
let dinheiro =prompt("Você tem dinheiro?")
let restaurante = prompt("O restaurante está aberto?")

if (fome === "Não" || dinheiro === "Não"){
    console.log("Hoje a janta será em casa!")
}else if (fome === "Sim" && dinheiro === "Sim" && restaurante === "Não"){
    console.log("Peça um delivery!")
}else if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Sim"){
    console.log("Hoje o jantar será no seu restaurante perfeito!")
}