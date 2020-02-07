import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../services/profesor.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarProfesoresComponent implements OnInit {

  profesores: Array<Profesor>;

  busqueda: string;

  constructor(
    private _profesorService: ProfesorService
  ) { }

  ngOnInit() {
    this.profesores = this._profesorService.obtenerListado();
  }

  eliminarProfesor(id: string) {
    this._profesorService.eliminarProfesor(id);
    this.profesores = this._profesorService.obtenerListado();
  }

}
