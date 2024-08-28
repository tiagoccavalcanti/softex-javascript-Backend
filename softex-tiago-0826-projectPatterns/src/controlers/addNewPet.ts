const {pacientes} = require("../models/data")
import {Paciente} from "../models/data"

function addNewPet(paciente:Paciente):void{
    pacientes.push(paciente)
}

module.exports = {addNewPet}