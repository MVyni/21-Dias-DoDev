let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;


class Hotel {
    IdHotel;
    Nome;
    Categoria;
    Endereco;
    Telefone;

    constructor (idHotel, nome, categoria, endereco, telefone){
        this.IdHotel = idHotel;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    idReserva;
    IdHotel;
    NomeResponsavel;
    Entrada;
    Saida;

    constructor (idReserva, idHotel, nomeResponsavel, entrada, saida){
        this.IdReserva = idReserva;
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
    let continuar = false;

    do{
        let idHotel = prompt("Digite o ID do hotel:");

        for (let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length;
                continuar = true;
            } else if(idHotel == hoteis[i].Id - 1){
                console.log("ID inválido");
            }
        }
    } while(!continuar)

        let idReserva = prompt("Digite o ID da reserva para cadastro:");
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

        const objetoReserva = new Reserva (idReserva, idHotel, nomeResponsavel, entrada, saida);
        idReserva++;
        reservas.push(objetoReserva);
        } 
        
function reservasHotel(idHotel){
    reservas.forEach(x => x.idHotel {
        
    });
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
            
        default:
            continuar = false;
            break;
    }
}