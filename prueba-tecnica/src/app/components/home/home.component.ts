import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  title:string='Bienvenido al colegio Miraflores!';

  constructor() { }

  ngOnInit() {
  }

}
