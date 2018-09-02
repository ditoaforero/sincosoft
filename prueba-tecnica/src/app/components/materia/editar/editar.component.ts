import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materia } from '../../../models/materia';
import { MateriaService } from '../../../services/materia.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarMateriaComponent implements OnInit {
  idMateria: string;
  materias: Array<Materia>;
  materia: Materia;
  constructor(private route: ActivatedRoute, private _materiaService: MateriaService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idMateria = params['id'];
    });
    this.materias= this._materiaService.obtenerListado().filter(m=> m.id == this.idMateria);

    if(this.materias.length>0){
      this.materia= this.materias[0]
    }else{
      console.log("no encontro materia para editar!!")
    }
  }

  editar() {
    this._materiaService.actualizarMateria(this.materia);
    alert("Materia actualizada!")
  }
}
