//--> multiplica dois numeros inteiros
const prompt = require('prompt-sync')({sigint: true})

var n1 = parseInt(prompt('digite o primeiro numero para ser multiplicado: '));
var n2 = parseInt(prompt('digite o segundo numero para ser multiplicado pelo primeiro: '));
console.log(`A multiplicação dos números digitados é ${n1*n2}`);