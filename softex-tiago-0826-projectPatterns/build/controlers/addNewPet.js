"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("../models/data");
function addNewPet(paciente) {
    pacientes.push(paciente);
}
module.exports = { addNewPet };
