import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UUID } from 'angular2-uuid';

// Modelo
import { Materia } from '../models/materia';

@Injectable()
export class MateriaService {

    // Declaración de la variable que tendra el EndPoint del servicio rest
    url: string;

    materias: Array<Materia> = [];

    constructor(private _http: HttpClient) {
        
    }

    agregar(materia: Materia) {
        if (!this.existeMateria(materia.nombre, materia.curso)) {
            console.log('La materia no existe');
            // Generación automatica del id
            materia.id = UUID.UUID();
            // Se agrega la materia
            this.materias.push(materia);
            localStorage.setItem('materias', JSON.stringify(this.materias));
            console.log('Se agregó la materia');
        } else {
            console.log('Ya existe la materia');
        }
    }

    obtenerListado() {
        this.materias = [];
        if (localStorage.getItem('materias')) {
            this.materias = JSON.parse(localStorage.getItem('materias'));
        }
        return this.materias;
    }

    eliminarMateria(id: string) {
        let index: number = 0;
        for (let i = 0; i < this.materias.length; i++) {
            if (this.materias[i].id == id) {
                index = this.materias.indexOf(this.materias[i]);
                this.materias.splice(index, 1);
            }
        }
        localStorage.setItem('materias', JSON.stringify(this.materias));
    }

    actualizarMateria(materia) {
        var index = this.materias.indexOf(materia);
        if (index !== -1) {
            this.materias.splice(index, 1, materia);
        }
        localStorage.setItem('materias', JSON.stringify(this.materias));
    }

    obtenerMateria(id: string) {
        for (let i = 0; i < this.materias.length; i++) {
            if (this.materias[i].id == id) {
                return this.materias[i];
            }
        }
        return null;
    }


    private existeMateria(nombre:string, curso:string): boolean {
        let existe: boolean = false;
        for (let i = 0; i < this.materias.length; i++) {
            if (this.materias[i].nombre == nombre && this.materias[i].curso == curso) {
                return true;
            }
        }
        return existe;

    }

}

