// realizar uma tarefa, e nao devolve nada

function dizerNome() {
  console.log("Marcos");
}

dizerNome(); // ira executar, nao tive nenhum retorno

function multiplicarPorDois(valor) {
  return valor * 2;
}

console.log(multiplicarPorDois(5)); // 2 x 5 = 10

// faz um calculo operacao e retorna algo
function calculadora(valor) {
  return valor * 3;
}

console.log(calculadora(10)); // 10 x 3 = 30
calculadora();
//praticando calculadora

function calculadora3(calculadora3) {
  return calculadora3 * 2;
}
calculadora3();
console.log(calculadora3(15)); // 15 x 2 = 30

function calculate(somar) {
  return somar * 5;
}
console.log(calculate(5)); //5 x 5 = 25
