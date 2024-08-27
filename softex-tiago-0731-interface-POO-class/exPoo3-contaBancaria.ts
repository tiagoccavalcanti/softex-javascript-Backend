/* Descrição : Crie uma classe ContaBancaria que tenha as seguintes funcionalidades e atributos.

Atributos: 
Tipo de Conta : string
Saldo: number

Funcionalidades:
Adicionar um valor ao saldo (depositar).
Retirar um valor do saldo (sacar).
Mostrar o saldo atual (mostrarSaldo).  */

class ContaBancaria {
    tipoDeConta:string;
    saldo:number;

    constructor(tipodeconta:string, saldo:number){
        this.tipoDeConta=tipodeconta;
        this.saldo=saldo;
    }
// tanto em depositar quanto em sacar, uso o mais igual pra que o saldo seja atualizado
    depositar(valor: number){
        return this.saldo += valor;
    }

    sacar(valor: number){
        return this.saldo -= valor;
    }
// coloquei um textinho de referencia para testar que todas as contas estao funcionando
    mostrarSaldo(){
        return `o saldo de ${this.tipoDeConta} é ${this.saldo}`
    }

}

// teste
/* const tiago = new ContaBancaria( "poupanca" , 1000)

console.log(tiago.mostrarSaldo())

tiago.sacar(200)

console.log(tiago.mostrarSaldo())

tiago.depositar(300)

console.log(tiago.mostrarSaldo())

const letra = new ContaBancaria("corrente" , 5000)

letra.sacar(1000);

console.log(letra.mostrarSaldo()) */