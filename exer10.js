let temperatura = 0;
let menor_temperatura = 0;
let maior_temperatura = 0;
let soma_temperaturas = 0;
let quantidade_temperaturas = 0;

while (true) {
  temperatura = Number(prompt("Digite a temperatura (ou zero para encerrar):"));

  if (temperatura === 0) {
    break;
  }

  soma_temperaturas += temperatura;
  quantidade_temperaturas++;

  if (temperatura < menor_temperatura || quantidade_temperaturas === 1) {
    menor_temperatura = temperatura;
  }

  if (temperatura > maior_temperatura || quantidade_temperaturas === 1) {
    maior_temperatura = temperatura;
  }
}

let media_temperaturas = quantidade_temperaturas > 0 ? soma_temperaturas / quantidade_temperaturas : 0;

document.write(`Menor temperatura: ${menor_temperatura} <br/>`);
document.write(`Maior temperatura: ${maior_temperatura} <br/>`);
document.write(`Média das temperaturas: ${media_temperaturas} <br/>`);