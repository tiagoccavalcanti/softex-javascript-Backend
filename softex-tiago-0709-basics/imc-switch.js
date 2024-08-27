// -->O IMC (Índice de Massa Corporal) é uma unidade de medida internacional usada para calcular se uma pessoa está no seu peso ideal. A fórmula mais genérica de cálculo de IMC é imc = peso / (altura * altura), onde o peso é dado em quilos e a altura em metros. Há uma tabela que define uma classificação para cada faixa de IMC. Segundo esta tabela, pessoas com IMC menor ou igual a 18.5 estão abaixo do peso; pessoas com IMC maior que 18.5 e menor que 25 estão no peso ideal; já as pessoas com IMC maior ou igual a 25 estão acima do peso. Elabore um algoritmo que leia peso e altura de uma pessoa, informe seu IMC e também se ela está abaixo do peso, no peso ideal ou acima do peso.

const prompt = require('prompt-sync')({sigint: true});

var peso = Number(prompt('por favor diga o seu peso para podermos informar o imc: '));
var altura = Number(prompt('agora precisamos da sua altura em cm: '));

var imc = parseInt((peso / (altura * altura)) * 10000);

switch(imc){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7: 
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        console.log(`o seu imc é ${imc}, isso significa que você esta abaixo do seu peso ideal`);
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
        console.log(`o seu imc é ${imc}, isso significa que você esta dentro do seu peso ideal`);
        break;    
    default:
        console.log(`o seu imc é ${imc}, isso significa que você esta acima do seu peso ideal`);
        break;
    }