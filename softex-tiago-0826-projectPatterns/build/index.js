"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("./models/data");
const { addNewPet } = require("./controlers/addNewPet");
const { deletePet } = require("./controlers/deletePet");
const { readPets } = require("./controlers/readPet");
const { updatePets } = require("./controlers/updatePets");
addNewPet({
    tutor: "geovanni",
    id: 10,
    historico: "ta mec",
    caracteristicas: {
        nome: "fulano",
        especie: "golden",
        cor: "dourado",
        idade: 10
    }
});
addNewPet({
    tutor: "tiago",
    id: 11,
    historico: "TA MEC",
    caracteristicas: {
        nome: "BOB",
        especie: "GOLDEN",
        cor: "dourado",
        idade: 20,
    }
});
addNewPet({
    tutor: "tiago",
    id: 11,
    historico: "TA MEC",
    caracteristicas: {
        nome: "BOB",
        especie: "GOLDEN",
        cor: "dourado",
        idade: 20,
    }
});
console.log(pacientes);

updatePets("BOB", "historico", "mano, nao vai dar nao")

console.log(pacientes)