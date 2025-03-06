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

let corCamisa = 'blue'

function alterarCor(cor){

corCamisa = cor

}

console.log(corCamisa) // ira imprimir a cor blue
alterarCor('vermelho')
console.log(corCamisa) // ira imprimir a cor vermelho

let CorSite5 = 'roxo'


function ResetaCor5(){

CorSite5 = ''

}
console.log(CorSite5)
ResetaCor5()
console.log(CorSite5)