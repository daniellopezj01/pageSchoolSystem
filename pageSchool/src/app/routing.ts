import { MallaComponent } from './malla/malla.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: 'Docentes', component: TeacherComponent },
    { path: 'container', component: ContainerComponent }, 
    { path: 'justificacion', component: JustificacionComponent }, 
    { path: 'mallaCurricular', component: MallaComponent }, 
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