class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }
    ExibirInformacoes(){
        console.log("Informações do computador: ");
        console.log("Tipo: " + this.Tipo);
        console.log("Processador: " + this.Processador);
        console.log("Vídeo: " + this.Video);
        console.log("Armazenamento: " + this.Armazenamento);
        console.log("Memoria Ram: " + this.MemoriaRam);
        console.log("SSD: " + this.Ssd);
    }
}

// Exemplo de uso
const meuComputador = new Computador("notebook", "Ryzen 7", "Dedicado", 500, 16, true);
meuComputador.ExibirInformacoes();

// Exercicio 2
class Carro {
    Nome
    Potencia
    Velocidade
    Aceleracao
    constructor(nome, potencia, velocidade, aceleracao){
        this.Nome = nome;
        this.Potencia = potencia;
        this.Velocidade = velocidade;
        this.Aceleracao = aceleracao;
    }
    CalcularTempoMedio(distancia){
        let resultado = distancia / (this.Velocidade / this.Aceleracao);
        return resultado
    }
}

// Exercicio 3
class Corrida{
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes
    constructor(nome, tipo, distancia){
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Vencedor = "";
        this.Participantes = [];
    }
    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia);
        let vencedor = this.Participantes[0];

        for(let i = 1; i < this.Participantes.length; i++){
            tempo = this.Participantes[i].CalcularTempoMedio(this.Distancia);
            if(tempo < menorTempo){
                menorTempo = tempo;
                vencedor = this.Participantes[i];
            }
        }
        return this.Vencedor = vencedor;
    }
    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida("Monaco", "Formula 1", 60000)

corrida.Participantes[0] = new Carro ("Jeep", 120, 160, 5);
corrida.Participantes[1] = new Carro ("Sentra", 210, 200, 9);
corrida.Participantes[2] = new Carro ("Cobalt", 300, 220, 10)

corrida.DefinirVencedor();
corrida.ExibirVencedor();