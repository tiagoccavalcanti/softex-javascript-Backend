export interface Endereco {
    cidade:string;
    bairro:string;
    cep:string;
    rua:string;
    numero:number;
}

export interface Veterinario {
    cpf:string;
    crmv:number;
    especialidade:string;
    infoPessoal: {
        nome:string,
        endereco:Endereco,
        contato:{
            fone:number,
            email:string,
        }
    }
}

const vets:Veterinario[] = [];
module.exports = { vets }