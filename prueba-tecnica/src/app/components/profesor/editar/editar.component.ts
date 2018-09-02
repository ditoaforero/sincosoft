import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../services/profesor.service';
import { Profesor } from '../../../models/profesor';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarProfesorComponent implements OnInit {
  idProfesor: string;
  profesores: Array<Profesor>;
  profesor: Profesor;
  constructor(private route: ActivatedRoute, private _profesorService: ProfesorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProfesor = params['id'];
    });
    this.profesores= this._profesorService.obtenerListado().filter(p=> p.id == this.idProfesor);

    if(this.profesores.length>0){
      this.profesor= this.profesores[0]
    }else{
      console.log("no encontro profesor para editar!!")
    }
  }

  editar() {
    this._profesorService.actualizarProfesor(this.profesor);
    alert("Profesor actualizado!")
  }

}
