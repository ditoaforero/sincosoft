import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarMateriasComponent implements OnInit {

  materias = [
    {
      id: 1,
      nombre:'Matematicas',
      curso: 1
    },
    {
      id: 2,
      nombre:'Español',
      curso: 2
    },
    {
      id: 3,
      nombre:'Matematicas',
      curso: 2
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
