import { Paciente } from "../../models/pacientes";
const { pacientes } = require("../.././models/pacientes")

function readPets(lendo:string|number){
    if(typeof lendo == "string"){
        if(pacientes.findIndex((paciente:Paciente)=>paciente.caracteristicas.nome == lendo) == -1){
           return console.log("Nome não encontrado");
        }else{
            return console.log(pacientes[pacientes.findIndex((paciente:Paciente)=>paciente.caracteristicas.nome == lendo)])
        }
            
    }if(pacientes.findIndex((paciente:Paciente)=>paciente.id == lendo) == -1){
        return console.log("Id não cadastrado");
    }else{
        return console.log(pacientes[pacientes.findIndex((paciente:Paciente)=>paciente.id == lendo)])
    }
}

module.exports = {readPets}
