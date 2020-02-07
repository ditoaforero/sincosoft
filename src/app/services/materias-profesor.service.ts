import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UUID } from 'angular2-uuid';

// Modelo
import { Materia } from '../models/materia';
import { MateriaProfesor } from '../models/materias-profesor';

@Injectable()
export class MateriaProfesorService {

    // Declaración de la variable que tendra el EndPoint del servicio rest
    url: string;

    materiasProfesor: Array<MateriaProfesor> = [];

    constructor(private _http: HttpClient) {

    }

    getMateriasByIdProfesor(idProfesor: string){
      return this.materiasProfesor.filter(m=> m.idProfesor== idProfesor)
    }

    eliminarMateriaProfesor(idProfesor: string, idMateria:string) {
        let index: number = 0;
        let materiasProf =  this.materiasProfesor.filter(m=> m.idProfesor== idProfesor && m.idMateria==idMateria)

        if(materiasProf.length>0){
            index = this.materiasProfesor.indexOf(materiasProf[0])
            this.materiasProfesor.splice(index, 1);
        }
    }

    agregarMateriaProfesor(idProfesor: string, idMateria:string){
      this.materiasProfesor.push({idMateria, idProfesor})
    }

}
