let valor
let quantidade 

let opção = prompt("Qual opção você deseja para o seu carro: gasolina, álcool ou calibrar os pneus?")

switch(opção){
    case "gasolina":
         valor = parseInt(prompt("Quanto reais você quer abastacer?"))
        quantidade = valor / 5

        console.log("Você abasteceu " + quantidade + "L de gasolina.")
        break;
    
    case "álcool":
         valor = parseInt(prompt("Quanto reais você quer abastacer?"))
        quantidade = valor / 3

        console.log("Você abasteceu " + quantidade + "L de álcool.")
        break;

    default: 
        console.log("Pneus calibrados com sucesso!")
        break;
}
