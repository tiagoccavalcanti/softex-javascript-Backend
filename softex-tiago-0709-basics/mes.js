// -->Considerando que o ano possui 12 meses, leia um número inteiro entre 1 e 12 e, com o uso da estrutura de controle escolha/caso, informe o nome do mês que corresponde a este número.
const prompt = require('prompt-sync')({sigint: true});

var num = Number(prompt('Escreva um numero e falaremos o mes correspondente: '))

switch(num){
    case 1:
        console.log('janiero')
        break;
    case 2:
        console.log('fevereiro')
        break;
    case 3:
        console.log('março')
        break;
    case 4:
        console.log('abril')
        break;
    case 5:
        console.log('maio')
        break;
    case 6:
        console.log('junho')
        break;
    case 7:
        console.log('julho')
        break;
    case 8:
        console.log('agosto')
        break;
    case 9:
        console.log('setembro')
        break;
    case 10:
        console.log('outubro')
        break;
    case 11:
        console.log('novembro')
        break;
    case 12:
        console.log('dezembro')
        break;
    default:
        console.log('opção inválida')
        break;
}