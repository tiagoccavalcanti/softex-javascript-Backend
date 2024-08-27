// Na matemática, o fatorial de um número inteiro a, representado por a!, é o produto de todos os inteiros positivos menores ou iguais a a. Por exemplo, 3! ou 3 fatorial é dado por 3 * 2 * 1, que é igual a 6. Construa um programa que seja capaz de ler um número inteiro e apresentar seu fatorial.
const prompt = require('prompt-sync')({sigint: true});

var n = parseInt(prompt('escolha um inteiro e diremos o seu fatorial: '));
var i = 0
var x = 0

for(i ; i <= n ; i++){
    x += i;
}

console.log(x)