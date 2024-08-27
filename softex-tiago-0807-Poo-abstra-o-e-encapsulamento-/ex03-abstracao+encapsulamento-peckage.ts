abstract class Peckage{
    public module:string;
    private token:number;
    constructor(module:string, token:number){
        this.module=module;
        this.token=token;
    }

    protected useModule(nome:string){
        console.log(`este eh o seu nome ${nome} este é o modulo ${this.module} e este é o token ${this.token}`)
    }
}
class Server extends Peckage{
    public useUseModule(){
        this.useModule("tiago")
    }
}

const user = new Server ("tiago.ccavalcanti", 123456)
user.useUseModule() 