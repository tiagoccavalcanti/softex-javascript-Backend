import { Paciente } from "./models/data"
const { pacientes } = require("./models/data")
const {addNewPet} = require("./controlers/addNewPet")

/* const paciente1:Paciente = {
        caracteristicas:{
            nome:"fulano",
            especie:"golden",
            cor:"dourado",
            idade: 10
        },
        tutor:"geovanni",
        id:10,
        historico:"ta mec"
        
           

        
    } */


addNewPet({
    nome:"fulano",
    especie:"golden",
    cor:"dourado",
    idade: 10
};
tutor:"geovanni";
id:10;
historico:"ta mec")
console.log(pacientes)