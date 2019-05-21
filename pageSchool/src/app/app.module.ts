import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { MaterialModule } from './material';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { MallaComponent } from './malla/malla.component';
import { GisComponent } from './gis/gis.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { InfelcomComponent } from './infelcom/infelcom.component';
import { GimiComponent } from './gimi/gimi.component';
import { TelematicsComponent } from './telematics/telematics.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ContainerComponent,
    HomeComponent,
    JustificacionComponent,
    MallaComponent,
    GisComponent,
    CompetenciasComponent,
    InfelcomComponent,
    GimiComponent,
    TelematicsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
