//--> divide dois numeros inteiros
const prompt = require('prompt-sync')({sigint: true})

var n1 = parseInt(prompt('digite o primeiro numero para ser o dividendo: '));
var n2 = parseInt(prompt('digite o segundo numero para ser o divisor: '));
console.log(`A divisçao dos números digitados é ${n1/n2}`);