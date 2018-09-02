import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { HomeComponent } from '../app/components/home/home.component';
import { ListarAlumnosComponent } from '../app/components/alumno/listar/listar.component';
import { ListarMateriasComponent } from '../app/components/materia/listar/listar.component';
import { ListarProfesoresComponent } from '../app/components/profesor/listar/listar.component';

import { AgregarAlumnoComponent } from '../app/components/alumno/agregar/agregar.component';
import { EditarAlumnoComponent } from './components/alumno/editar/editar.component';
import { GestionarMateriasAlumnoComponent } from './components/alumno/gestiornar-materias/gestionar-materias.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alumnos', component: ListarAlumnosComponent },
  { path: 'editarAlumno/:id', component: EditarAlumnoComponent },
  { path: 'gestionarMateriasAlumno/:id', component: GestionarMateriasAlumnoComponent },
  { path: 'materias', component: ListarMateriasComponent },
  { path: 'profesores', component: ListarProfesoresComponent },
  { path: 'agregarAlumno', component: AgregarAlumnoComponent },
  { path: '**', component: HomeComponent }

];


export const appRoutingProviders:any =[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

