"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("../models/data");
function deletePet(deletando) {
    if (typeof deletando == "string") {
        if (pacientes.findIndex((paciente) => paciente.caracteristicas.nome == deletando) == -1) {
            return console.log("Nome não encontrado");
        }
        else {
            return pacientes.splice(pacientes.findIndex((paciente) => paciente.caracteristicas.nome == deletando), 1);
        }
    }
    if (pacientes.findIndex((paciente) => paciente.id == deletando) == -1) {
        return console.log("Id não cadastrado");
    }
    else {
        return pacientes.splice(pacientes.findIndex((paciente) => paciente.id == deletando), 1);
    }
}
module.exports = { deletePet };
