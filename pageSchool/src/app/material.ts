import {
    MatButtonModule,
    MatCheckboxModule,
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatListModule
    ],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatListModule
    ]
})
export class MaterialModule { }