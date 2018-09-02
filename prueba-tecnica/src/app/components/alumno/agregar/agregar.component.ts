import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../services/alumno.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarAlumnoComponent implements OnInit {

  alumno:Alumno={
    nombre: null,
    primerApellido: null,
    segundoApellido: null,
  };

  constructor(
    private _alumnoService:AlumnoService
  ) { }

  ngOnInit() {
  }

  agregar(){
    console.log('Componente - AgregarAlumno - agregar');
    console.log('Alumno a agregar:',this.alumno);
    
    
    this._alumnoService.agregar(this.alumno).subscribe(
      result => {
        console.log('Se consumio la peticion');
      }
    );
    

  }

}


