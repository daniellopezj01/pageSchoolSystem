import { ContactoComponent } from './contacto/contacto.component';
import { GimiComponent } from './gimi/gimi.component';
import { InfelcomComponent } from './infelcom/infelcom.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { MallaComponent } from './malla/malla.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GisComponent } from './gis/gis.component';
import { TelematicsComponent } from './telematics/telematics.component';

const routes: Routes = [
    { path: 'Docentes', component: TeacherComponent },
    { path: 'container', component: ContainerComponent }, 
    { path: 'justificacion', component: JustificacionComponent }, 
    { path: 'mallaCurricular', component: MallaComponent },
    { path: 'Competencias', component: CompetenciasComponent  }, 
    { path: 'GIS', component: GisComponent  }, 
    { path: 'INFELCOM', component: InfelcomComponent  }, 
    { path: 'GIMI', component: GimiComponent  },
    { path: 'Telematics', component: TelematicsComponent  },  
    { path: 'Contacto', component: ContactoComponent  },  
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 53]
        }
    )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }