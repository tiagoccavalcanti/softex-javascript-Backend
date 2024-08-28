
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

export interface Paciente {
    caracteristicas: {
        nome: string;
        especie: string;
        cor: string;
        idade: number;
    }
    tutor:string;
    id:number;
    historico:string;
}

const pacientes:Paciente[] = [];

module.exports = {
    pacientes
    
}