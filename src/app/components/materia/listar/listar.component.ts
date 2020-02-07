import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../../services/materia.service';
import { Materia } from '../../../models/materia';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarMateriasComponent implements OnInit {

  materias: Array<Materia>;

  busqueda:string;

  constructor(
    private _materiaService:MateriaService
  ) { }

  ngOnInit() {
    this.materias= this._materiaService.obtenerListado();
  }

  eliminarMateria(id:string){
    this._materiaService.eliminarMateria(id);
    this.materias= this._materiaService.obtenerListado();
  }

}
