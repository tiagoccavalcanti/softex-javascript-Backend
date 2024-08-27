class Produto {
// atributos da classe -> caracteristicas inerentes à uma casse
    cod: number;
    tamanho: number;
    peso: number;
    marca: string;
    nome: string;
    cor: string;

// construtor da classe -> nao sei bem pra que serve essa parte
    constructor(cod:number, tamanho:number, peso:number, marca:string, nome:string, cor:string){
        this.cod = cod;
        this.tamanho = tamanho;
        this.peso = peso;
        this.marca = marca;
        this.nome = nome;
        this.cor = cor;
    }
// metodos da classe -> possiveis funçoes que podem ser usadas para executar tarefas expecificas
    mostrarNome(): string{
        return this.nome;
    }
}

const produto1 = new Produto (1, 3, 4, "vans", "tenis", "preto")

console.log(produto1.mostrarNome());