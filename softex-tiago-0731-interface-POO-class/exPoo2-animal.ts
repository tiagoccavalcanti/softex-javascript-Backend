class Animal {
    nome: string;
    som: string;

constructor(nome:string, som: string){
    this.nome = nome;
    this.som = som;
}

fazerSom(): string{
    return this.som
}

}

const cachorro = new Animal("cachorro", "au-au-au");

const gato = new Animal("gato", "mial-mial");

console.log(`esse eh meu animal, ele é um ${cachorro.nome} e ele faz ${cachorro.fazerSom()}`)
console.log(gato.fazerSom())