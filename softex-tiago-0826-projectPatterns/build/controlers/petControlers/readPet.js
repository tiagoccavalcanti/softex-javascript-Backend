"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("../../models/pacientes");
function readPets(lendo) {
    if (typeof lendo == "string") {
        if (pacientes.findIndex((paciente) => paciente.caracteristicas.nome == lendo) == -1) {
            return console.log("Nome não encontrado");
        }
        else {
            return console.log(pacientes[pacientes.findIndex((paciente) => paciente.caracteristicas.nome == lendo)]);
        }
    }
    if (pacientes.findIndex((paciente) => paciente.id == lendo) == -1) {
        return console.log("Id não cadastrado");
    }
    else {
        return console.log(pacientes[pacientes.findIndex((paciente) => paciente.id == lendo)]);
    }
}
module.exports = { readPets };
