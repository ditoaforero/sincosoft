import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../services/profesor.service';
import { MateriaService } from '../../../services/materia.service';
import { MateriaProfesorService} from '../../../services/materias-profesor.service';
import { Profesor } from '../../../models/profesor';
import { Materia } from '../../../models/materia';
import { MateriaProfesor } from '../../../models/materias-profesor';


@Component({
  selector: 'app-gestionar-materias-profesor',
  templateUrl: './gestionar-materias.component.html'
})
export class GestionarMateriasProfesorComponent implements OnInit {

  idProfesor: string;
  profesores: Array<Profesor>;
  materiasProfesor: Array<MateriaProfesor>;
  profesor: Profesor;
  materias: Array<Materia>;

  constructor(
    private route: ActivatedRoute,
    private _profesorService: ProfesorService,
    private _materiaService: MateriaService,
    private _materiasProfesorService: MateriaProfesorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProfesor = params['id'];
    });
    this.profesores= this._profesorService.obtenerListado().filter(p=> p.id == this.idProfesor);
    this.materias= this._materiaService.obtenerListado();

    if(this.profesores.length>0){
      this.profesor= this.profesores[0]
      this.materiasProfesor= this._materiasProfesorService.getMateriasByIdProfesor(this.profesor.id)
    }else{
      console.log("no encontro profesor para editar!!")
    }
  }

  validarMateriasAsociadas(materia: Materia){
      if(this.materiasProfesor.filter(_=> _.idMateria == materia.id).length>0)
        return "SI"
      else
        return "NO"
  }

  excluir(idMateria: string){
    this._materiasProfesorService.eliminarMateriaProfesor(this.profesor.id, idMateria)
    this.materiasProfesor= this._materiasProfesorService.getMateriasByIdProfesor(this.profesor.id)
    alert("Materia excluida")
  }

  asignar(idMateria: string){
    this._materiasProfesorService.agregarMateriaProfesor(this.profesor.id, idMateria)
    this.materiasProfesor= this._materiasProfesorService.getMateriasByIdProfesor(this.profesor.id)
    alert("Materia asignada")
  }



}
