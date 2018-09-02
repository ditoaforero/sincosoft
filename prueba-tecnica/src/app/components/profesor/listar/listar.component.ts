import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarProfesoresComponent implements OnInit {

  profesores = [
    {
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
