class Veiculo{
    constructor(
    public marca:string,
    public modelo:string,
    public ano:number
){}

mostrarInfo():void{
    console.log(this.marca, this.modelo,this.ano)
}
}

class Carro extends Veiculo{
    constructor(
    marca:string,
    modelo:string,
    ano:number,
    public numeroDePortas:number
    ){
        super(marca, modelo, ano);
        this.numeroDePortas=numeroDePortas;
    }

    mostrarInfo(): void {
        console.log("------------------\n"+this.marca +"\n"+ this.modelo +"\n"+ this.ano +"\n"+ this.numeroDePortas+"\n-------------------")
    }
}

class Moto extends Veiculo{
    constructor(
        marca:string,
        modelo:string,
        ano:number,
        public tipoDeGuidao:string
        ){
            super(marca, modelo, ano);
            this.tipoDeGuidao=tipoDeGuidao;
        }
    
        mostrarInfo(): void {
            console.log("------------------\n"+this.marca +"\n"+ this.modelo +"\n"+ this.ano +"\n"+ this.tipoDeGuidao+"\n-------------------")
        }
}

let carro = new Carro("vw", "gol", 2019, 4);
carro.mostrarInfo()
let moto = new Moto("shynerai", "120cc", 2024, "de moto doidao")
moto.mostrarInfo()