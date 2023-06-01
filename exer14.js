let n = Number(prompt("Digite um valor para n:"));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${j}`);
    if (j !== i) {
      document.write(" ");
    }
  }
  document.write("<br/>");
}