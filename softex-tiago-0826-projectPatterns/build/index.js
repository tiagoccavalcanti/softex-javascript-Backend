"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pacientes } = require("./models/pacientes");
const { addNewPet } = require("./controlers/petControlers/addNewPet");
const { deletePet } = require("./controlers/petControlers/deletePet");
const { readPets } = require("./controlers/petControlers/readPet");
const { updatePets } = require("./controlers/petControlers/updatePets");
const { addVet } = require("./controlers/vetControlers/addVet");
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
