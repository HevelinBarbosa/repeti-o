let soma_maior_idade = 0;
let quantidade_maior_idade = 0;

while (true) {
  let idade = Number(prompt("Digite a idade da pessoa (ou zero para encerrar):"));

  if (idade === 0) {
    break;
  }

  if (idade >= 18) {
    soma_maior_idade += idade;
    quantidade_maior_idade++;
  }
}

let media_maior_idade = quantidade_maior_idade > 0 ? soma_maior_idade / quantidade_maior_idade : 0;

document.write(`Soma das pessoas maiores de idade: ${soma_maior_idade} <br/>`);
document.write(`Média de idade das pessoas maiores de idade: ${media_maior_idade} <br/>`);