"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { vets } = require("../../models/veterinarios");
function addVet(newVet) {
    if (vets.findIndex((vet) => vet.crmv == newVet.crmv) == -1) {
        console.log("veterinario já cadastrado");
    }
    else {
        vets.push(newVet);
    }
}
module.exports = { addVet };
