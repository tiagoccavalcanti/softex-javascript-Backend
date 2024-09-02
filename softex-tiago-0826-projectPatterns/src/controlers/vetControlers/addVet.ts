import { Veterinario } from "../../models/veterinarios";
import { Endereco } from "../../models/veterinarios";
const { vets } = require("../../models/veterinarios")

function addVet(newVet:Veterinario){
    if( vets.findIndex((vet:Veterinario)=>vet.crmv == newVet.crmv) == -1){
        console.log("veterinario já cadastrado")
    }else{
        vets.push(newVet);
    }
}

module.exports = { addVet };