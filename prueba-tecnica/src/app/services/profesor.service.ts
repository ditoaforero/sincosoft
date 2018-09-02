import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { UUID } from 'angular2-uuid';

// Constantes globales
import { GLOBAL } from './global';

// Modelo
import { Profesor } from '../models/profesor';

@Injectable()
export class ProfesorService {

    // Declaración de la variable que tendra el EndPoint del servicio rest
    url: string;

    profesores: Array<Profesor> = [];

    constructor(private _http: HttpClient) {
        // Se construye la URL para las peticiones respectivas
        this.url = GLOBAL.url;
    }

    // Funcion para agregar profeso
    agregar(profesor:Profesor) {

        if (!this.existeProfesor(profesor.tipoDocumento, profesor.numeroDocumento)) {
            console.log('El profesor no existe');
            // Generación automatica del id
            profesor.id = UUID.UUID();
            // Se agrega el profesor
            this.profesores.push(profesor);
            localStorage.setItem('profesores', JSON.stringify(this.profesores));
            console.log('Se agregó el profesor');
        } else {
            console.log('Ya existe el profesor');
        }
    }

    obtenerListado() {
        this.profesores = [];
        if (localStorage.getItem('profesores')) {
            this.profesores = JSON.parse(localStorage.getItem('profesores'));
        }
        return this.profesores;
    }

    eliminarProfesor(id: string) {
        let index: number = 0;
        for (let i = 0; i < this.profesores.length; i++) {
            if (this.profesores[i].id == id) {
                index = this.profesores.indexOf(this.profesores[i]);
                this.profesores.splice(index, 1);
            }
        }
        localStorage.setItem('profesores', JSON.stringify(this.profesores));
    }

    actualizarProfesor(profesor) {
        var index = this.profesores.indexOf(profesor);
        if (index !== -1) {
            this.profesores.splice(index, 1, profesor);
        }
        localStorage.setItem('profesores', JSON.stringify(this.profesores));
    }

    obtenerProfesor(id: string) {
        for (let i = 0; i < this.profesores.length; i++) {
            if (this.profesores[i].id == id) {
                return this.profesores[i];
            }
        }
        return null;
    }


    private existeProfesor(tipoDocumento: string, numeroDocumento: number): boolean {
        for (let i = 0; i < this.profesores.length; i++) {
            if (this.profesores[i].tipoDocumento == tipoDocumento && this.profesores[i].numeroDocumento == numeroDocumento) {
                return true;
            }
        }
        return false;
    }

}

