"use strict";
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    mostrarInfo() {
        console.log(this.marca, this.modelo, this.ano);
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroDePortas) {
        super(marca, modelo, ano);
        this.numeroDePortas = numeroDePortas;
        this.numeroDePortas = numeroDePortas;
    }
    mostrarInfo() {
        console.log("------------------\n" + this.marca + "\n" + this.modelo + "\n" + this.ano + "\n" + this.numeroDePortas + "\n-------------------");
    }
}
class Moto extends Veiculo {
    constructor(marca, modelo, ano, tipoDeGuidao) {
        super(marca, modelo, ano);
        this.tipoDeGuidao = tipoDeGuidao;
        this.tipoDeGuidao = tipoDeGuidao;
    }
    mostrarInfo() {
        console.log("------------------\n" + this.marca + "\n" + this.modelo + "\n" + this.ano + "\n" + this.tipoDeGuidao + "\n-------------------");
    }
}
let carro = new Carro("vw", "gol", 2019, 4);
carro.mostrarInfo();
let moto = new Moto("shynerai", "120cc", 2024, "de moto doidao");
moto.mostrarInfo();
