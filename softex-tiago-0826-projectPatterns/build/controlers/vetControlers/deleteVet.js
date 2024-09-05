"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { vets } = require("../../models/veterinarios");
function deleteVet(deletando) {
    if (vets.findIndex((vet) => vet.infoPessoal.nome == deletando) == -1) {
        return console.log(`Usuário ${deletando}, não encontrado`);
    }
    return vets.splicec(vets.findIndex((vet) => vet.infoPessoal.nome == deletando));
}
module.exports = { deleteVet };
