// usando if e else
let idade = 17
function somar(valor){
    return idade + valor;
}
let resultado = somar(1) // ira somar o valor da variavel idade +1
if(resultado >= 18){
    console.log("sim, vc e maior de idade")
}else{
    console.log("não, vc nao e maior de idade")
}

//  novamente so que de outra forma
let numero = 17
let maiorDeIdade = (numero >= 18 ?'sim e maior de idade' :  'e menor de idade')
// para ser maior de idade precisa ser maior de 18
console.log(maiorDeIdade)




