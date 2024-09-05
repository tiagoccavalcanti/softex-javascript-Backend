"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { vets } = require("../../models/veterinarios");
function readVet(reading) {
    if (vets.findIndex((vet) => vet.infoPessoal.nome == reading) == -1) {
        return console.log(`veterinario ${reading} não encontrado`);
    }
    else {
        return console.log(vets.find((vet) => vet.infoPessoal.nome == reading));
    }
}
module.exports = { readVet };
