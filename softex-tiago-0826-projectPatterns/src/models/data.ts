
/* export interface Paciente {
    caracteristicas: {
        nome: string;
        especie: string;
        cor: string;
        idade: number;
    }
    tutor: string;
    id: string;
    historico: string;
}
 */

// para que a interface funcione adequadamente o objeto "caracteristicas deve ficar abaixo das outras caracteristicas da interface"
export interface Paciente {
    tutor:string;
    id:number;
    historico:string;
    caracteristicas: {
        nome: string;
        especie: string;
        cor: string;
        idade: number;
    }
}

const pacientes:Paciente[] = [];

module.exports = {pacientes}
