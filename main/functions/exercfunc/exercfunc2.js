console.log("Marcos")
// usando if
let placa = "1B25";
let placaOrig = placa;
function alterarPlaca() {
  placa = "1E25";
}
alterarPlaca();

if (placa === placaOrig) {
  console.log("Placa Esta Correta");
} else {
  console.log("Placa Esta Incorreta");
}
// ira comparar se o valor da placa e identico a placaOrig
// mas ira retornar incorreto por  que a funcao altera o valor
