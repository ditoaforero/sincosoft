import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from '../../../models/alumno';
import { ActivatedRoute, Params } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarAlumnoComponent implements OnInit {

  alumno: Alumno = new Alumno();

  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.obtenerAlumno();
  }

  actualizarAlumno() {
    this._alumnoService.actualizarAlumno(this.alumno);
  }

  obtenerAlumno() {

    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this.alumno= this._alumnoService.obtenerAlumno(id);
    });
  }

}
