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
    Id;
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

function solicitarOpcao(){
    let opcao = prompt("Qual opção você deseja? 1: Cadastrar hotel / 2: Fazer uma reserva ");
    return opcao;
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
    
    const objetoReserva = new Reserva (id, idHotel, nomeResponsavel, entrada, saida)

  
}


let continuar = true;

while(continuar){
    let opcao = solicitarOpcao();

    switch(opcao){
        case "1":
            CadastroHotel();
        break;

        default:
            continuar = false;
            break;
    }
}