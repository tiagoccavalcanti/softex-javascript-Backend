class Administrador{
    public name:string;
    private senha:string;

    constructor(name:string, senha:string){
        this.name = name
        this.senha = senha
    }

    private alterarSenha(novaSenha:string){
        console.log(`a senha antiga era ${this.senha}, a senha nova é ${novaSenha}`)
        return this.senha = novaSenha;
    }

    public esqueciAsenha(nome:string, senha:string){
        if(nome == this.name){
            return this.alterarSenha(senha)
        }
        console.log("nome de usuario incorreto")
    }
}

const adm1 = new Administrador("tiago cavalcanti", "chocolate")
console.log(adm1.name)

adm1.esqueciAsenha("fulano de tal", "pneumo")
adm1.esqueciAsenha("taigo cavalcanti", "chocolate")