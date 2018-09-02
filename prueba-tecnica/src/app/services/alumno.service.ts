import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { UUID } from 'angular2-uuid';

// Constantes globales
import { GLOBAL } from './global';

// Modelo
import { Alumno } from '../models/alumno';

@Injectable()
export class AlumnoService {

    // Declaración de la variable que tendra el EndPoint del servicio rest
    url: string;

    alumnos: Array<Alumno> = [];

    constructor(private _http: HttpClient) {
        // Se construye la URL para las peticiones respectivas
        this.url = GLOBAL.url;
    }

    // Funcion para agregar el alumno
    agregar(alumno: Alumno) {

        /*
        // Para consumo de la petición REST
        let payload = JSON.stringify(alumno);
        console.log('Servicio - AlumnoService - agregar');
        console.log('Alumno:', alumno);
        console.log('Payload:', payload);
        // Encabezado header
        const HEADERS = new HttpHeaders({
            'Content-Type': 'application/json',
        })

        return this._http.post(this.url + '/alumno', payload, { headers: HEADERS })
            .pipe(map(res => {
                return res['message'];
            }));
        */

        console.log('Servicio - AlumnoService - agregar');
        console.log('Alumno:', alumno);

        if (!this.existeAlumno(alumno.tipoDocumento, alumno.numeroDocumento)) {
            console.log('El alumno no existe');
            // Generación automatica del id
            alumno.id = UUID.UUID();
            // Se agrega el alumno
            this.alumnos.push(alumno);
            localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
            console.log('Se agregó el alumno');
        } else {
            console.log('Ya existe el alumno');
        }
    }

    obtenerListado() {
        this.alumnos = [];
        if (localStorage.getItem('alumnos')) {
            this.alumnos = JSON.parse(localStorage.getItem('alumnos'));
        }
        return this.alumnos;
    }

    eliminarAlumno(id: string) {
        let index: number = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].id == id) {
                index = this.alumnos.indexOf(this.alumnos[i]);
                this.alumnos.splice(index, 1);
            }
        }
        localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    }

    actualizarAlumno(alumno) {
        var index = this.alumnos.indexOf(alumno);
        if (index !== -1) {
            this.alumnos.splice(index, 1, alumno);
        }
        localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    }

    obtenerAlumno(id: string) {
        console.log('Llego a obtener alumno', id)
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].id == id) {
                return this.alumnos[i];
            }
        }
        return null;
    }


    private existeAlumno(tipoDocumento: string, numeroDocumento: number): boolean {
        let existe: boolean = false;
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].tipoDocumento == tipoDocumento && this.alumnos[i].numeroDocumento == numeroDocumento) {
                return true;
            }
        }
        return existe;

    }

}

