"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { vets } = require("../../models/veterinarios");
function updateVet(vetMudar, caracMudar, mudado) {
    if (typeof vetMudar == "string") {
        if (vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar) == -1) {
            return console.log(`Nome ${vetMudar} não encontrado`);
        }
        else {
            switch (caracMudar) {
                case "cpf":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].cpf = mudado;
                case "crmv":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].crmv = mudado;
                case "especialidade":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].especialidade = mudado;
                case "endereco":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].infopessoal.endereco = mudado;
                case "telefone":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].infoPessoal.contato.fone = mudado;
                case "email":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].infoPessoal.contato.email = mudado;
                case "nome":
                    return vets[vets.findIndex((vet) => vet.infoPessoal.nome == vetMudar)].infoPessoal.nome = mudado;
                default:
                    return console.log("caracteristica não disponível para alteração");
            }
        }
    }
    else {
        if (vets.findIndex((vet) => vet.crmv == vetMudar) == -1) {
            return console.log("Id não cadastrado");
        }
        else {
            switch (caracMudar) {
                case "nome":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].infoPessoal.nome = mudado;
                case "cpf":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].cpf = mudado;
                case "crmv":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].crmv = mudado;
                case "especialidade":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].especialidade = mudado;
                case "endereco":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].endereco = mudado;
                case "telefone":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].contato.telefone = mudado;
                case "email":
                    return vets[vets.findIndex((vet) => vet.crmv == vetMudar)].contato.email = mudado;
                default:
                    return console.log("caracteristica nao disponível para alteração");
            }
        }
    }
}
module.exports = { updateVet };