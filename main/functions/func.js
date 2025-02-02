// funcoes
// verbo ++ Substantivo

//ResetaCor
// Transformar objeto etc

let corSite = ('Orange')
function resetaCor(){

    corSite = ''

}

console.log(corSite) // ira imprimir Orange
resetaCor()
console.log(corSite) // ira imprimir 'Vazio'

// com argumentos
let corSite2 = 'White'

function resetaCor2(cor){
    corSite2 = cor
}
console.log(corSite2)
resetaCor2('black') // vai alterar a cor 
console.log(corSite2)

// praticando
let cavaleiro = 'elmo,robe,espada'
function removeArmadura(){

    cavaleiro = ''
}

console.log(cavaleiro)
removeArmadura()
console.log(cavaleiro) // ira imprimir 'Vazio'

let mulher = 'roupas-intimas,vestido'
function mulherPelada(){

    mulher = 'ta-PELADA, moh pikito grande'
}

console.log(mulher) // vai imprimir ela com roupas
mulherPelada() 
console.log(mulher) // vai imprimir ela  sem roupas

let corCamisa = 'blue'

function alterarCor(cor){

corCamisa = cor

}

console.log(corCamisa) // ira imprimir a cor blue
alterarCor('vermelho')
console.log(corCamisa) // ira imprimir a cor vermelho

let miaKhalifa = 'peitos-grandes'


function peitoPequeno(){

    miaKhalifa = 'peitin pequeno,viu'
}

console.log(miaKhalifa) // ira imprimir mia com peitos grandes
peitoPequeno() 
console.log(miaKhalifa) // ira imprimir mia com peitin pequeno

let alterarPeitos = 'peitos-grandes'


function peitos(peito){

    alterarPeitos = peito
}


console.log(alterarPeitos)
peitos('peitos-murchos')
console.log(alterarPeitos) // ira imprimir peitos-murchos

let elisaSanchez = 'meloes-gigantes'
function meloes(){

elisaSanchez = 'ki,melao gigante, coroa'
    
}
console.log(elisaSanchez)
meloes()
console.log(elisaSanchez) // ira imprimir elia com os meloes gigantes
