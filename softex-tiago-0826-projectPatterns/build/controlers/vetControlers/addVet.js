"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { vets } = require("../../models/veterinarios");
function addVet(newVet) {
    if (vets.findIndex((vet) => vet.crmv == newVet.crmv) == -1) {
        return vets.push(newVet);
    }
    else {
        return console.log("veterinario já cadastrado");
    }
}
module.exports = { addVet };
