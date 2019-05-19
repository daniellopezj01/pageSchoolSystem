import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { TeacherComponent } from './teacher/teacher.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'teacher', component: TeacherComponent },
    { path: 'container', component: ContainerComponent }, 
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