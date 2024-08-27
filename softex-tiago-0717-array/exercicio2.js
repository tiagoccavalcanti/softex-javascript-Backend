/* Você precisa escrever uma função medalhaDeAcordoComPosicao que recebe um número representando a posição de um competidor em uma competição e retorna a medalha correspondente. As medalhas são atribuídas conforme a posição:

Crie uma função chamada medalhaDeAcordoComPosicao.

A função deve receber um parâmetro numero, que representa a posição do competidor.

Utilize um array chamado posicoes que contém as strings: ["ouro", "prata", "bronze", “nada”].

A função deve retornar a medalha correspondente usando o array posicoes e um único comando if.

Se a posição for fora do intervalo de 1 a 3, a função deve retornar "nada". */

const prompt = require('prompt-sync')({sigint: true});

var position = parseInt(prompt('digite a sua colocação: '));

const posicoes = [
    'ouro',
    'prata',
    'bronze',
    'nada'
];
medalhaDeAcordoComPosicao(position)

// function that uses 'if' and bring as feedback a position based on the information ginven 
function medalhaDeAcordoComPosicao(n){

/*     if(n-1 == 0){
        console.log(posicoes[0]);
    }else if(n-1 == 1){
        console.log(posicoes[1]);
    }else if(n-1 == 2){
        console.log(posicoes[2]);
    }else{
        console.log(posicoes[3]);
    }; */

    // we can also use a 'if' only to give a diferent message when get a medal or no
    if(n-1 == 0 || n-1 == 1 || n-1 == 2){
        console.log(`parabén, você ganhou medalha de ${posicoes[n-1]}`);
    }else{
        console.log(`que pena - ${posicoes[3]}`);
    } 
};