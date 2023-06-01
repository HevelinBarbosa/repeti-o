let quantidade_pares = 0;
let quantidade_impares = 0;
let soma_pares = 0;
let soma_geral = 0;

while (true) {
  let numero = parseInt(prompt("Digite um número positivo (ou zero para encerrar):"));

  if (numero === 0) {
    break;
  }

  if (numero > 0) {
    soma_geral += numero;
    if (numero % 2 === 0) {
      soma_pares += numero;
      quantidade_pares++;
    } else {
      quantidade_impares++;
    }
  }
}

let media_pares = quantidade_pares > 0 ? soma_pares / quantidade_pares : 0;
let media_geral = soma_geral / (quantidade_pares + quantidade_impares);

document.write(`Quantidade de números pares: ${quantidade_pares} <br/>`);
document.write(`Quantidade de números ímpares: ${quantidade_impares} <br/>`);
document.write(`Média dos valores pares: ${media_pares} <br/>`);
document.write(`Média geral dos números lidos: ${media_geral}<br/>`);