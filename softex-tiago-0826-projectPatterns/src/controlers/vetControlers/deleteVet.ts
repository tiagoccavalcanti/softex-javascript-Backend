import { Veterinario } from "../../models/veterinarios";
const { vets } = require("../../models/veterinarios");

function deleteVet(deletando:string){
    if(vets.findIndex((vet:Veterinario)=>vet.infoPessoal.nome == deletando) == -1){
        return console.log(`Usuário ${deletando}, não encontrado`)
    }
    return vets.splicec(vets.findIndex((vet:Veterinario)=>vet.infoPessoal.nome == deletando))
}

module.exports ={ deleteVet };