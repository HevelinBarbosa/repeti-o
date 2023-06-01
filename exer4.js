let numero = Number(prompt("Digite um número:"));
let primo = true;

for (let i = 2; i < numero; i++) {
  if (numero % i == 0) {
    primo = false;
    break;
  }
}

if (primo) {
  document.write(numero + " é primo.");
} else {
  document.write(numero + " não é primo.");
}