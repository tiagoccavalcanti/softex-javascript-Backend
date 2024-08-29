const {pacientes} = require("../models/data");
import {Paciente} from "../models/data";

function deletePet(deletando:string|number){
    if(typeof deletando == "string"){
        if(pacientes.findIndex((paciente:Paciente)=>paciente.caracteristicas.nome == deletando) == -1){
           return console.log("Nome não encontrado");
        }else{
            return pacientes.splice(pacientes.findIndex((paciente:Paciente)=>paciente.caracteristicas.nome == deletando), 1)
        }
            
    }if(pacientes.findIndex((paciente:Paciente)=>paciente.id == deletando) == -1){
        return console.log("Id não cadastrado");
    }else{
        return pacientes.splice(pacientes.findIndex((paciente:Paciente)=>paciente.id == deletando), 1)
    }
}

module.exports = {deletePet}

