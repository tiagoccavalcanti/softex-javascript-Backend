//-->recebe altura e peso e fala se o peso esta ideal e qual é o seu imc
const prompt = require('prompt-sync')({sigint: true});

var peso = Number(prompt('Por favor, informe o seu peso para que possamos calcular o IMC: '));
var altura = Number(prompt('Agora informe sua altura em cm: '))

var imc = (peso/(altura * altura)) * 10000 

    if(imc<=18.5){
        console.log(`seu imc é ${imc}, isso significa que você esta abaixo do seu peso ideal`)
    }else if(imc >18.5 && imc<25){
        console.log(`seu imc é ${imc}, isso significa que você esta no seu peso ideal`)
    }else{
        console.log(`seu imc é ${imc}, isso significa que você esta acima do seu peso ideal`)

    }
