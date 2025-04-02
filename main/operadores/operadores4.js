var n1 = 12.6;
var n2 = 12;
var n3 = 12.4;
var n4 = 12;
var resultado = parseFloat(n1) + parseInt(n2) + parseFloat(n3) + parseInt(n4);
console.log(resultado);

function somar(valor) {
  return (resultado + valor) * 2;
}
somar();
console.log(somar(5));
