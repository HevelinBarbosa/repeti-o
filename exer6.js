let decimal = Number(prompt("Digite um número decimal:"));
let binario = "";
let e = decimal
while (decimal > 0) {
  binario = (decimal % 2) + binario;
  decimal = Math.floor(decimal / 2);
}

document.write(`O número decimal ${e} em binário é: ${binario}`);