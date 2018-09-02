import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { HttpClientModule} from "@angular/common/http";

// Routing
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { HomeComponent } from './components/home/home.component'


// Componentes alumno
import { AgregarAlumnoComponent } from './components/alumno/agregar/agregar.component';
import { ListarAlumnosComponent } from './components/alumno/listar/listar.component';
import { EditarAlumnoComponent } from './components/alumno/editar/editar.component';
import { EliminarAlumnoComponent } from './components/alumno/eliminar/eliminar.component';

// Componentes profesor
import { ListarProfesoresComponent } from './components/profesor/listar/listar.component';
import { EliminarProfesorComponent } from './components/profesor/eliminar/eliminar.component'
import { EditarProfesorComponent } from './components/profesor/editar/editar.component'
import { AgregarProfesorComponent } from './components/profesor/agregar/agregar.component'


// Componentes materia
import { ListarMateriasComponent } from './components/materia/listar/listar.component';
import { EliminarMateriaComponent } from './components/materia/eliminar/eliminar.component'
import { EditarMateriaComponent } from './components/materia/editar/editar.component'
import { AgregarMateriaComponent } from './components/materia/agregar/agregar.component';

//Servicios
import { AlumnoService } from './services/alumno.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    EliminarAlumnoComponent,
    ListarProfesoresComponent,
    EliminarProfesorComponent,
    EditarProfesorComponent,
    AgregarProfesorComponent,
    ListarMateriasComponent,
    AgregarMateriaComponent,
    EditarMateriaComponent,
    EliminarMateriaComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
