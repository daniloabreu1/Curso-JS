const Cliente = {
    nome:'pedro',
    idade:'20',
    peso:87.11
}
console.log(Cliente)
console.log(Cliente.nome)

function Obj(nome){
    this.nome = nome
}
const obj1 = new Obj('jamanta')
console.log(obj1.nome)
const obj2 = new Obj('nao morreu')
console.log(obj2.nome)