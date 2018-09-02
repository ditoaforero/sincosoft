import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarProfesoresComponent implements OnInit {

  profesores = [
    {
      tipoDocumento: 'CC',
      numeroDocumento: 101010,
      nombre:'Teo',
      primerApellido:'Rodriguez',
      segundoApellido:'Romero',
    },
    {
      nombre:'Romulo',
      primerApellido:'Gonzales',
      segundoApellido:'Pataquiva',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
