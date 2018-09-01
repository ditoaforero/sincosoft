import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { ListarAlumnosComponent } from '../app/components/alumno/listar/listar.component';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: '', redirectTo: 'home', pathMatch:'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'alumnos', component: ListarAlumnosComponent },
  { path: '**', component: ListarAlumnosComponent }

];


export const appRoutingProviders:any =[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

