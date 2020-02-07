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
import { GestionarMateriasAlumnoComponent } from './components/alumno/gestiornar-materias/gestionar-materias.component';

// Componentes profesor
import { ListarProfesoresComponent } from './components/profesor/listar/listar.component';
import { EditarProfesorComponent } from './components/profesor/editar/editar.component'
import { AgregarProfesorComponent } from './components/profesor/agregar/agregar.component'
import { GestionarMateriasProfesorComponent } from './components/profesor/gestionar-materias/gestionar-materias.component'


// Componentes materia
import { ListarMateriasComponent } from './components/materia/listar/listar.component';
import { EditarMateriaComponent } from './components/materia/editar/editar.component'
import { AgregarMateriaComponent } from './components/materia/agregar/agregar.component';

//Servicios
import { AlumnoService } from './services/alumno.service';
import { MateriaService } from './services/materia.service';
import { ProfesorService } from './services/profesor.service';
import { MateriaProfesorService } from './services/materias-profesor.service';

// Pipes
import { BuscarPipe } from './pipes/buscar.pipe';
import { AsociarMateriasComponent } from './components/alumno/asociar-materias/asociar-materias.component';




@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    GestionarMateriasAlumnoComponent,
    ListarProfesoresComponent,
    EditarProfesorComponent,
    AgregarProfesorComponent,
    GestionarMateriasProfesorComponent,
    ListarMateriasComponent,
    AgregarMateriaComponent,
    EditarMateriaComponent,
    HomeComponent,
    BuscarPipe,
    AsociarMateriasComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    AlumnoService,
    MateriaService,
    ProfesorService,
    MateriaProfesorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
