let numero = Number(prompt("Digite um número:"))
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

document.write("O fatorial de " + numero + " é " + fatorial)