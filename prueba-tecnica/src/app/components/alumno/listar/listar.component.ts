import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarAlumnosComponent implements OnInit {

  private alumnos = [
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

  constructor() { }

  ngOnInit() {
  }

}
