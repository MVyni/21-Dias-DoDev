let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;


class Hotel {
    Id;
    Nome;
    Categoria;
    Endereco;
    Telefone;

    constructor (id, nome, categoria, endereco, telefone){
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    id;
    IdHotel;
    NomeResponsavel;
    Entrada;
    Saida;

    constructor (id, idHotel, nomeResponsavel, entrada, saida){
        this.Id = id;
        this.IdHotel = idHotel;
        this.NomeResponsavel = nomeResponsavel;
        this.Entrada = entrada;
        this.Saida = saida;
    }
}

function CadastroHotel(){
    let id = prompt("Digite o ID do hotel para cadastro:");
    let nome = prompt("Digite o nome do hotel:");
    let categoria = parseInt(prompt("Digite a categoria:"));
    let endereco = prompt("Digite o endereço do hotel:");
    let telefone = prompt("Digite o telefone do hotel:");
    
    let objetoHotel = new Hotel (id, nome, categoria, endereco, telefone);
    idHotel++
    hoteis.push(objetoHotel);
    
}

function CadastroReserva(){
    let continuar = false;
    let idHotel 
    do{
        idHotel = prompt("Digite o ID do hotel:");
        for (let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length;
                continuar = true;
            } else if(i == hoteis.length - 1){
                console.log("ID inválido");
            }
        }
    } while(!continuar)

        let id = prompt("Digite o ID da reserva para cadastro:");
        let nomeResponsavel = prompt("Digite o nome do responsável:");
        let entrada = parseInt(prompt("Digite o a data de entrada:"));
        
        let saida 
        do {
        saida = parseInt(prompt("Digite a data de saída:"));
        if(saida < entrada){
            console.log("Dia de entrada é maior que o dia de saida!");
            continuar = false;
        }
    } while(saida < entrada)

        const objetoReserva = new Reserva (id, idHotel, nomeResponsavel, entrada, saida);
        idReserva++;
        reservas.push(objetoReserva);
} 

function reservasHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reservas.IdHotel){
            let i = idHotel - 1;
            console.log("Hotel: ", hoteis[i].Nome);
            console.log("Responsável: ", reserva.NomeResponsavel);
            console.log("Dia de entrada: ", reserva.Entrada);
            console.log("Dia de saída: ", reserva.Saida);

        }
    })
}

function ProcurarIdReserva(idReserva){
    reservas.forEach(reserva => {
        if(idReserva == reserva.Id){
            let idHotel = reservas[idReserva - 1].IdHotel;
            console.log("Hotel: ", hoteis[idHotel - 1].Nome);
            console.log("Endereço: ", hoteis[idHotel - 1].Endereco);
            console.log("Dia de entrada: ", reservas[idReserva - 1].Entrada);
            console.log("Dia de saída: ", reservas[idReserva - 1].Saida);

        }
    })
}

function ReservasDoUsuario(nome){
    for(let i = 0; i < reservas.length; i++){
        if(nome == reservas[i].NomeResponsavel){
            console.log("Reserva:", reservas[i].Id);
        }
    }
}

function ReservasPorCategoria(categoria){
    let arrayCategoria = [];
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            arrayCategoria.push(hoteis[i].Nome);  
        }
    }
    return arrayCategoria;
}

function trocarTelefone(idHotel, telefone){
    let novoTelefone = telefone;
    for(let i = 0; i < reservas.length; i++){
        if(idHotel == reservas[i].IdHotel){
            reservas[i].Telefone = novoTelefone;
        }
    }
}

function solicitarOpcao(){
    let opcao = prompt("Qual opção você deseja? 1: Cadastrar hotel / 2: Fazer uma reserva / 3: Ver reservas do hotel");
    return opcao;
}

   
let continuar = true;
while(continuar){
    let opcao = solicitarOpcao();

    switch(opcao){
        case "1":
            CadastroHotel();
            break;

        case "2":
            CadastroReserva();
            break;
            
        case "3":
            reservasHotel(parseInt(prompt("Digite o ID do hotel:")));
            break;

        case "4":
            ProcurarIdReserva(parseInt(prompt("Digite o ID da reserva:")));
            break;

        case "5":
            ReservasDoUsuario(prompt("Digite o nome do responsável:"));
            break;

        case "6":
            let arrayCategoria = ReservasPorCategoria(parseInt(prompt("Digite a categoria do hotel:")));
            console.log(arrayCategoria);
            break;
            
        case "7":
            let idHotel = paseInt(prompt("Digite o id do hotel:"));
            let telefone = parseInt(prompt("Digite o telefone atualizado:"));
            trocarTelefone(idHotel, telefone);
            console.log("Telefone atualizado com sucesso.");
            break;

        case "8":
            console.log("Operação inválida.");
            continuar = false;
            break;

        default:
            continuar = false;
            break;
    }
}