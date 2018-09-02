import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../services/alumno.service'
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarAlumnoComponent implements OnInit {

  alumno: Alumno = new Alumno();

  constructor(
    private _alumnoService: AlumnoService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  agregar() {

    /*
    // Para el consumo con servicio Rest 
    this._alumnoService.agregar(this.alumno).subscribe(
      result => {
        console.log('Se consumio la peticion');
      }
    );
    */
    this._alumnoService.agregar(this.alumno);
    this.alumno = new Alumno();



  }

}


