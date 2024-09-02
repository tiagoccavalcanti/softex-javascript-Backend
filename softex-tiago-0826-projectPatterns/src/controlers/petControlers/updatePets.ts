import { Paciente } from "../../models/pacientes";
const { pacientes } = require("../models/data");


function updatePets(petMudar: string | number, caracMudar: string, mudado: string | number) {
    if (typeof petMudar == "string") {
        if (pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar) == -1) {
            return console.log("Nome não encontrado");
        } else {

            switch (caracMudar) {
                case "nome":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar)].caracteristicas.nome = mudado;
                case "especie":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar)].caracteristicas.especie = mudado;
                case "cor":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar)].caracteristicas.cor = mudado;
                case "idade":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar)].caracteristicas.idade = mudado;
                case "historico":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar)].historico = mudado;
                case "tutor":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.caracteristicas.nome == petMudar)].tutor = mudado
                default:
                    return console.log("caracteristica nao disponível para alteração")

            }
        }

    } else {
        if (pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar) == -1) {
            return console.log("Id não cadastrado");
        } else {
            let paciente: Paciente = pacientes.filter((paciente: Paciente) => paciente.id == petMudar)
            switch (caracMudar) {
                case "nome":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar)].caracteristicas.nome = mudado;
                case "especie":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar)].caracteristicas.especie = mudado;
                case "cor":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar)].caracteristicas.cor = mudado;
                case "idade":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar)].caracteristicas.idade = mudado;
                case "historico":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar)].historico = mudado;
                case "tutor":
                    return pacientes[pacientes.findIndex((paciente: Paciente) => paciente.id == petMudar)].tutor = mudado;
                default:
                    return console.log("caracteristica nao disponível para alteração")

            }
        }
    }
}

module.exports = { updatePets }