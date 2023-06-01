let n = Number(prompt("Digite o valor de n:"));

let a = 1;
let b = 1;

if (n === 1) {
  document.write(1);
} else {
  document.write(`${a} <br/>`);
  document.write(`${b} <br/>`);
  
  
  for (let i = 3; i <= n; i++) {
    let proximo = a + b;
  document.write(`${proximo} <br/>`);
    a = b;
    b = proximo;
  }
}