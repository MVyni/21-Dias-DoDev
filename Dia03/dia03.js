let nomeUsu = ""
let idadeUsu = 0
let alturaUsu = 0
let pesoUsu = 0

nomeUsu = prompt("Qual é o seu nome?"); 
idadeUsu = prompt("Qual é o seu idade?");
alturaUsu = parseFloat(prompt("Qual é o seu altura?")); 
pesoUsu = parseInt(prompt("Qual é o seu peso?"));

let anoNascUsu = 2023 - idadeUsu 
let  imcUsu = 0
imcUsu = pesoUsu / (alturaUsu * alturaUsu)

console.log ("Olá " + nomeUsu + ", você tem " + idadeUsu + " anos, nasceu em " + anoNascUsu + ", tem " + alturaUsu + " de altura, e pesa " + pesoUsu + "kg e seu IMC é " + imcUsu + " Kg/m2.");



