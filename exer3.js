let di = Number(prompt("Digite o valor do depósito inicial:"));
let taxaJuros = Number(prompt("Digite a taxa de juros da poupança:")) / 100;
let saldo = di;
let totalJuros = 0;

for (let mes = 1; mes <= 24; mes++) {
  let juros = saldo * taxaJuros;
  saldo += juros;
  totalJuros += juros;
  document.write("Mês " + mes + ": saldo = R$" + saldo.toFixed(2) + ", juros = R$" + juros.toFixed(2));
  document.write("<br/>");
}

document.write("Total de juros ganhos no período: R$" + totalJuros.toFixed(2));