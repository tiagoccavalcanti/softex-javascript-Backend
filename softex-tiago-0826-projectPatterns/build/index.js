"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("./models/data");
const { addNewPet } = require("./controlers/addNewPet");
addNewPet(caracteristicas, {
    nome: "fulano",
    especie: "golden",
    cor: "dourado",
    idade: 10
}, tutor, "geovanni", id, 10, historico, "ta mec");
console.log(pacientes);
