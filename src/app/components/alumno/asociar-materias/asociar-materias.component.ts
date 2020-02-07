import { Component, OnInit } from '@angular/core';
import { Materia } from '../../../models/materia';
import { MateriaService } from '../../../services/materia.service';
import { MateriaAsociadaTemp } from '../../../models/materias-asociacion';
import { AlumnoService } from '../../../services/alumno.service';
import { MateriaAlumno } from '../../../models/materia-alumno';
import { ActivatedRoute, Params } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-asociar-materias',
  templateUrl: './asociar-materias.component.html'
})
export class AsociarMateriasComponent implements OnInit {

  materias: Array<Materia>=[];
  materiasAux: Array<MateriaAsociadaTemp>=[];
  materiasAlumno:Array<MateriaAlumno>=[];
  idAlumno:string;

  constructor(
    private _materiaService:MateriaService,
    private _alumnoService:AlumnoService,
    private _route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {

    this.obtenerMateriasAlumno();
    this.materias= this._materiaService.obtenerListado();
    console.log('MateriasAlumno:',this.materiasAlumno);
    console.log('Materias:',this.materias);

    for(let i=0;i<this.materias.length;i++){
      let materiaAuxiliar = new MateriaAsociadaTemp();
      materiaAuxiliar.materia=this.materias[i];
      materiaAuxiliar.asociada=this.materiaEstaAsociada(materiaAuxiliar.materia.id);
      this.materiasAux.push(materiaAuxiliar);
    }
    console.log('CruceMaterias:',this.materiasAux);
  }
  
  obtenerMateriasAlumno() {
    this._route.params.forEach((params: Params) => {
      this.idAlumno = params['id'];
      this.materiasAlumno = this._alumnoService.obtenerMateriasAlumno(this.idAlumno);
    });
  }

  materiaEstaAsociada(id:string):boolean {
    for(let i=0;i<this.materiasAlumno.length;i++){
      if(this.materiasAlumno[i].materiaId==id){
        return true;
      }
    }
    return false;
  }

  confirmarMaterias(){
    console.log('Confirmacion');
    console.log('MateriasAux:',this.materiasAux);

    for(let i=0;i<this.materiasAux.length;i++){
      if(this.materiasAux[i].asociada && !this.materiaEstaAsociada(this.materiasAux[i].materia.id)){
        let materiaAlumno:MateriaAlumno=new MateriaAlumno();
        materiaAlumno.materiaId=this.materiasAux[i].materia.id;
        materiaAlumno.notaPeriodo01=0;
        materiaAlumno.notaPeriodo02=0;
        this.materiasAlumno.push(materiaAlumno);
      }
    }

    

    this._alumnoService.actualizarMateriasAlumno(this.idAlumno, this.materiasAlumno);
    
  }

  cambiarEstado(id:string){
    console.log('Cambiar estado');
    for(let i=0;i<this.materiasAux.length;i++){
      if(this.materiasAux[i].materia.id==id){
        this.materiasAux[i].asociada=!this.materiasAux[i].asociada;
        break;
      }
    }
  }



}
