import { Materia } from "./materia";

export class Alumno {

    id:number=0;
    nombre:string=null;
    primerApellido:string=null;
    segundoApellido:string=null;
    materias:Array<Materia>=[];

    constructor(){
    }
    
}