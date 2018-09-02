import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarMateriasComponent implements OnInit {

  materias = [
    {
      nombre:'Matematicas'
    },
    {
      nombre:'Español'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
