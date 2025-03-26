let idade = 11
function somar(valor){
    return idade + valor;
}
let resultado = somar(5)
if (resultado >= 18){
    console.log("É maior de idade");
}else{
    console.log("É menor de idade");
}