// Você recebeu a tarefa de elaborar um programa que calcule o IMC médio da sua turma. Sabendo que o IMC é dado pela fórmula imc = peso / (altura * altura), elabore um programa que seja capaz de calcular o IMC de quantos alunos for necessário. A cada IMC calculado, o usuário deverá confirmar se deseja continuar. Quando o usuário optar por não continuar mais, exiba a média aritmética dos IMCs calculados.
const prompt = require('prompt-sync')({sigint: true});

var x = 0;
var i = 0;
for( 1 ; 1 <= 2 ; 1){
    var continuidade = Number(prompt('\nPara calcular um imc, digite 1, para encerrar o programa e calcular a media digite 0: '))

        if(continuidade == 1){
            var peso = Number(prompt('diga o seu peso para calcularnos o seu imc: '));
            var altura = Number(prompt('agora diga a sua altura: '));
        
            var imc = (peso/(altura * altura)) * 10000;

            console.log(`o seu imc é ${imc}`);
            x += imc;
            i++;
        }else if(continuidade == 0){
            console.log(`A média do imc da turma será ${x / i}`);
            break;

        }
}