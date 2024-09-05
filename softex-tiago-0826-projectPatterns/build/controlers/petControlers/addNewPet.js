"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("../../models/pacientes");
function addNewPet(adicionando) {
    if (pacientes.findIndex((paciente) => paciente.id == adicionando.id) == -1) {
        return pacientes.push(adicionando);
    }
    else {
        return console.log("\npaciente ja adicionado\n");
    }
}
module.exports = { addNewPet };
