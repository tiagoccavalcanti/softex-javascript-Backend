const {pacientes} = require("../../models/pacientes")
import {Paciente} from "../../models/pacientes"

function addNewPet(adicionando:Paciente):void{
    if(pacientes.findIndex((paciente:Paciente)=>paciente.id == adicionando.id) == -1){
        return pacientes.push(adicionando)
    }else{
    return console.log("\npaciente ja adicionado\n")
}}

module.exports = {addNewPet}