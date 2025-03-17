// verbo + substantivo
// funcao para resetar a cor
let corCamisa = "blue";
//function + o nome da funcao
function resetarCor() {
  corCamisa = "";
}
// a funcao ira resetar a cor
console.log(corCamisa);
// chamar a funcao
resetarCor();
console.log(corCamisa);

// mudar tonalidade
let corCamisa2 = "verde";
function mudartonalidade(cor, tonalidade) {
  corCamisa2 = cor + tonalidade;
}
// originalmente na variavel a cor esta verde
// na funcao, existe 2 argumentos cor e tonalidade
// na funcao, coloco o seguinte cor e concanteno com tonalidade
// no final continuo com a msm cor mais poderia alterar
// assim ficando, verde claro, com a concatenacao

console.log(corCamisa2);
mudartonalidade("verde", " claro");
console.log(corCamisa2);
