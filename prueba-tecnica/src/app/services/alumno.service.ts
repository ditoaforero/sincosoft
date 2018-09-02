import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

// Constantes globales
import { GLOBAL } from './global';

// Modelo
import { Alumno } from '../models/alumno';

@Injectable()
export class AlumnoService {

    // Declaración de la variable que tendra el EndPoint del servicio rest
    url: string;

    alumnos: Array<Alumno>=[];

    constructor(private _http: HttpClient) {
        // Se construye la URL para las peticiones respectivas
        this.url = GLOBAL.url;
    }

    // Funcion para agregar el alumno
    agregar(alumno: Alumno) {

        /*
        // Para consumo de la petición rest 
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

        this.alumnos.push(alumno);
        localStorage.setItem('alumnos',JSON.stringify(this.alumnos));

    }

    obtenerListado(){
        this.alumnos = JSON.parse(localStorage.getItem('alumnos'));
        return this.alumnos;
    }

    eliminar(alumno){
        var index = this.alumnos.indexOf(alumno);
        if(index!==-1){
            this.alumnos.splice(index,1);
        }
        localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
    }


}

