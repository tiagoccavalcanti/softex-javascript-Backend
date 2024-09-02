export interface Endereco {
    cidade:string;
    bairro:string;
    cep:string;
    rua:string;
    numero:number;
}

export interface Veterinario {
    cpf:string;
    crmv:string;
    especialidade:string;
    infoPessoal: {
        endereco:Endereco, 
        nome:string,
        contato:{
            fone:number,
            email:number,
        }
    }
}

const vets:Veterinario[] = [];
module.exports = { vets }