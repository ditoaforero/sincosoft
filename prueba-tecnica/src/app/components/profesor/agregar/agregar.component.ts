import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../services/profesor.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarProfesorComponent implements OnInit {


  profesor:Profesor = new Profesor();

  constructor(
    private _profesorService: ProfesorService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  agregar() {
    this._profesorService.agregar(this.profesor);
    this.profesor = new Profesor();
    document.querySelector('form').reset();
    alert("Profesor Agregado")

  }
}
