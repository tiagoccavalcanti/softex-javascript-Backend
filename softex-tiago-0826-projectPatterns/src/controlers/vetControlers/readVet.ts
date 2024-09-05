import { Veterinario } from "../../models/veterinarios";
import { Endereco } from "../../models/veterinarios";
const { vets } = require("../../models/veterinarios")

function readVet(reading: string){
    if( vets.findIndex((vet:Veterinario)=>vet.infoPessoal.nome == reading) == -1){
        return console.log(`veterinario ${ reading } não encontrado`)
    }else{
        return console.log (vets.find((vet:Veterinario)=>vet.infoPessoal.nome == reading))
    }
}

module.exports = { readVet };