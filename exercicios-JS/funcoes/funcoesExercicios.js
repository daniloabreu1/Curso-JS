function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
function somaPad(a=0,b=0,c=0){
    return a+b+c
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(somaPad(),somaPad(1),somaPad(2,3,4))