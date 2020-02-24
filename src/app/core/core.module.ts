import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MY_PERFECTSCROLLBAR_CONFIG } from '../config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddFormModalComponent } from './add-form-modal/add-form-modal.component';
import { ButtonsModule, WavesModule } from 'angular-bootstrap-md';
import {
    ErrorStateMatcher,
    MatCheckboxModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatOptionModule,
    MatSelectModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ SidebarComponent, AddFormModalComponent ],
    imports: [
        CommonModule,
        RouterModule,
        PerfectScrollbarModule,
        FontAwesomeModule,
        ButtonsModule,
        WavesModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    exports: [ SidebarComponent ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: MY_PERFECTSCROLLBAR_CONFIG
        },
        {
            provide: ErrorStateMatcher,
            useClass: ShowOnDirtyErrorStateMatcher
        }
    ]
})
export class CoreModule {
}
