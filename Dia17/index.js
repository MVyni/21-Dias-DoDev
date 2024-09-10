let hoteis = [];
let reservas = [];

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

function solicitarOpcao(){
    let opcao = prompt("Qual opção você deseja? 1: Cadastrar hotel / 2: Fazer uma reserva ");
    return opcao;
}

function CadastroHotel(id, nome, categoria, endereco, telefone, hoteis){

    const objetoHotel = new Hotel (id, nome, categoria, endereco, telefone);

    if(!hoteis.some(x => x.Id == id)){
        hoteis.push(objetoHotel);
        return objetoHotel;
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

function CadastroReserva(id, idHotel, nomeResponsavel, entrada, saida, reservas){

    const objetoReserva = new Reserva (id, idHotel, nomeResponsavel, entrada, saida)

  
}


let continuar = true;

while(continuar){
    let opcao = solicitarOpcao();

    switch(opcao){
        case "1":
            let id = prompt("Digite o ID do hotel para cadastro:");
            let nome = prompt("Digite o nome do hotel:");
            let categoria = prompt("Digite a categoria:");
            let endereco = prompt("Digite o endereço do hotel:");
            let telefone = prompt("Digite o telefone do hotel:");
            CadastroHotel(id, nome, categoria, endereco, telefone);
        break;
    }
}