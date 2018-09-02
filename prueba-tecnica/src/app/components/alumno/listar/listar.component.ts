import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from '../../../models/alumno';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarAlumnosComponent implements OnInit {

  alumnos: Array<Alumno>;
  
  /*
  alumnos = [
    {
      nombre:'Eduardo',
      primerApellido:'Arevalo',
      segundoApellido:'Forero',
      curso: 10
    },
    {
      nombre:'Lilina',
      primerApellido:'Manjarres',
      segundoApellido:'Villanueva',
      curso: 11
    },
  ];
  */

  constructor( 
    private _alumnoService:AlumnoService
  ) { }

  ngOnInit() {
    this.alumnos= this._alumnoService.obtenerListado();
  }

  eliminarAlumno(id:string){
    this._alumnoService.eliminarAlumno(id);
    this.alumnos= this._alumnoService.obtenerListado();
  }

}
