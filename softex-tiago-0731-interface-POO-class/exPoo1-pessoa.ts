class Pessoa {
    nome: string;
    idade: number;


    constructor (nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string{
        return `olá, meu nome é ${this.nome} e eu tenho ${this.nome}`
    }
}

const pessoa1 = new Pessoa ("tiago", 24);
const pessoa2 = new Pessoa ("fulano", 44);

console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar);