// exercicio criar uma funcao que altere algo
let Camisa = "verde";
function corCamisa(cor) {
  Camisa = cor;
}

console.log(Camisa);
corCamisa("azul"); // alterei a cor para azul
console.log(Camisa);
// agora alterar a tonalidade, e a cor juntos
let Camisa2 = "vermelho";
function trocarCorTonalidade(cor, tonalidade) {
  Camisa2 = cor + tonalidade;
}
console.log(Camisa2);
trocarCorTonalidade("Laranja", " Claro");
console.log(Camisa2);
// assim alterando a cor, e adicionando uma tonalidade
