const {pacientes} = require("../models/data")
import {Paciente} from "../models/data"

function addNewPet(adicionando:Paciente):void{
    if(pacientes.findIndex((paciente:Paciente)=>paciente.id == adicionando.id) == -1){
        return pacientes.push(adicionando)
    }else{
    return console.log("paciente ja adicionado")
}}

module.exports = {addNewPet}