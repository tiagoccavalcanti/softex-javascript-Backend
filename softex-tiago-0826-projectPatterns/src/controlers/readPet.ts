import { Paciente } from "../models/data";
const { pacientes } = require ("../models/data");

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
