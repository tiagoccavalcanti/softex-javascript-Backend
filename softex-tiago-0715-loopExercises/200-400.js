// Elabore um algoritmo que escreva todos os números inteiros de 200 a 400.
const prompt = require('prompt-sync')({sigint: true});

var i = 200;
do{
    console.log(i);
    i++;
}while(i<=400);