//--> Soma dois numeros reais
const prompt = require('prompt-sync')({sigint: true})

var n1 = Number(prompt('digite o primeiro numero para ser somado: '));
var n2 = Number(prompt('digite o segundo numero para ser somado: '))


console.log(`A soma dos números digitados é ${parseFloat(n1+n2)}`);