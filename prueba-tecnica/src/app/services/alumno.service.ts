import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

// Constantes globales
import { GLOBAL } from './global';

// Modelo
import { Alumno } from '../models/alumno';

@Injectable()
export class AlumnoService {
    //public url: string;
    url: string;
    

    constructor(private _http: HttpClient) {
        // Se construye la URL para las peticiones respectivas
        this.url = GLOBAL.url;
    }

    // Funcion para agregar el alumno

    agregar(alumno: Alumno) {

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
    
    }

    
}

