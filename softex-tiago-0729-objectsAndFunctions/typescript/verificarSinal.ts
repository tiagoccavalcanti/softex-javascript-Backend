function verificarSinal(num: number): string{
    if(num > 0){
        return `o numero ${num} é positivo`;
    }else if(num < 0){
        return `o numero ${num} é negativo`;
    }else if (num == 0 ){
        return `zero`;
    }
}

console.log(verificarSinal(1))
console.log(verificarSinal(2))
console.log(verificarSinal(-3))
console.log(verificarSinal(-10000))
console.log(verificarSinal(55))
console.log(verificarSinal(0))
console.log(verificarSinal(4))
console.log(verificarSinal(100000000000))