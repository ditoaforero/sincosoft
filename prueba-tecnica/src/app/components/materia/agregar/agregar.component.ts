import { Component, OnInit } from '@angular/core';
import { Materia } from '../../../models/materia';
import { Router } from '../../../../../node_modules/@angular/router';
import { MateriaService } from '../../../services/materia.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarMateriaComponent implements OnInit {


  materia:Materia = new Materia();

  constructor(
    private _materiaService: MateriaService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  agregar() {
    this._materiaService.agregar(this.materia);
    this.materia = new Materia();
  }


}
