import { Materia } from "./materia";

export class Alumno {

    id:string=null;
    tipoDocumento:string=null;
    numeroDocumento:number=null;
    nombre:string=null;
    primerApellido:string=null;
    segundoApellido:string=null;
    materias:Array<Materia>=[];

    constructor(){
    }
    
}