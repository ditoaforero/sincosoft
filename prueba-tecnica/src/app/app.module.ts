import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgregarComponent } from './components/alumno/agregar/agregar.component';
import { ListarAlumnosComponent } from './components/alumno/listar/listar.component';
import { EditarComponent } from './components/alumno/editar/editar.component';

import { routing, appRoutingProviders } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ListarAlumnosComponent,
    EditarComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
