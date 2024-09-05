import { Paciente } from "./models/pacientes";
import { Veterinario } from "./models/veterinarios";
import { Endereco } from "./models/veterinarios";
const { vets } = require("./models/veterinarios");
const { pacientes } = require("./models/pacientes");
const { addNewPet } = require("./controlers/petControlers/addNewPet");
const { deletePet } = require("./controlers/petControlers/deletePet");
const { readPets } = require("./controlers/petControlers/readPet");
const { updatePets } = require("./controlers/petControlers/updatePets");
const { addVet } = require("./controlers/vetControlers/addVet");
const { deleteVet } = require("./controlers/vetControlers/deleteVet");
const { readVet } = require("./controlers/vetControlers/readVet");
const { updateVet} = require("./controlers/vetControlers/updateVet");


addNewPet({
    tutor:"geovanni",
    id:10,
    historico:"ta mec",
    caracteristicas:{
        nome:"fulano",
        especie:"golden",
        cor:"dourado",
        idade: 10
    }
})


addNewPet({    
    tutor:"tiago",
    id:11,
    historico:"TA MEC",
    caracteristicas:{
        nome:"BOB",
        especie:"GOLDEN",
        cor:"dourado",
        idade: 20,
    }
})


/* readPets("fulano");
updatePets(10, "historico", "ta ruim pai")

readPets("fulano")

addNewPet({    
    tutor:"tiago",
    id:11,
    historico:"TA MEC",
    caracteristicas:{
        nome:"BOB",
        especie:"GOLDEN",
        cor:"dourado",
        idade: 20,
    }
})


console.log(pacientes)

deletePet("BOB")

console.log(pacientes) */

addVet({
    cpf: 12345678,
    crmv: 1,
    especialidade: "vet",
    infoPessoal: {
        nome: "pablo",
        endereco:{
            cidade:"rua nova",
            bairro:"curado",
            cep:"54-270060",
            rua:"das flores",
            numero: 0
        },
        contato:{
            fone: 6546353,
            email: "tiago123.cavalcanti@gmail.com"
        }
    }
})

addVet({
    cpf: 12345678,
    crmv: 55,
    especialidade: "vet",
    infoPessoal: {
        nome: "mario",
        endereco:{
            cidade:"rua nova",
            bairro:"curado",
            cep:"54-270060",
            rua:"das flores",
            numero: 0
        },
        contato:{
            fone: 6546353,
            email: "tiago123.cavalcanti@gmail.com"
        }
    }
})

readVet("mario")

console.log(vets)