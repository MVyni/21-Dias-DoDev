let qntdHomens = 0;
let qntdMulheresNotaAcima7 = 0;
let maiorNotasHomens = 0;
let contador = 1;
let mediaGeral = 0;

while (contador <= 10) {
  nota = parseFloat(prompt("Digite a nota do " + contador + "º aluno"));
  sexo = prompt("Digite o sexo (h/m).");

  if (sexo == "h") {
    if (nota > maiorNotasHomens) {
      maiorNotasHomens = nota;
    }
    qntdHomens++;
  }

  if (sexo == "m" && nota > 7) {
    qntdMulheresNotaAcima7++;
  }

  mediaGeral += nota;
  contador++;
}

mediaGeral = mediaGeral / 10;

console.log("A média geral dos alunos foi: " + mediaGeral);
console.log(qntdHomens + " homens enviaram as notas.");
console.log(
  "tiveram " + qntdMulheresNotaAcima7 + " mulheres com notas acima de 7"
);
console.log("A maior nota entre homens foi: " + maiorNotasHomens);

// exercicio 2

let saldoTotal = 1000;
let maiorValorInserido = 0;
let somaDosValores = 0;
let totalTransações = 0;
let continuar = false;

do {
  const nome = prompt("Digite seu nome:");
  const cpf = prompt("Digite seu cpf:");
  const valor = Number(prompt("Digite o valor da transição:"));
  const operação = prompt("Deseja Saque / Depósito?");

  if (valor < 0) {
    console.log("Valor inválido. A transação não foi realizada.");
  } else if (operação == "Saque" && valor > saldo) {
    console.log("Saldo insuficiente. A transação não foi realizada");
  } else if (operação == "Saque") {
    console.log("Olá, " + nome + ", seu saldo atual é R$" + saldoTotal + ".");
    saldoTotal -= valor;
    totalTransações++;
    somaDosValores += valor;
    if (valor > maiorValorInserido) {
      maiorValorInserido = valor;
    }
    console.log(
      "Transação realizada com sucesso. Seu saldo atual é R$" + saldoTotal + "."
    );
  }

  const opçao = prompt("Deseja continuar? (1 para continuar, 2 para parar)");
  if (opçao === "1") {
    continuar = true;
  } else if (opçao === "2") {
    continuar = false;
  } else {
    console.log("Opção inválida. Programa encerrado.");
    continuar = false;
  }
} while (continuar);

console.log("Saldo final: R$" + saldoTotal);
console.log("Maior valor inserido: R$" + maiorValorInserido);
console.log(
  "Médias dos valores inseridos: R$" + somaDosValores / totalTransações
);
