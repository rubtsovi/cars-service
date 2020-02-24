import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL, MY_PERFECTSCROLLBAR_CONFIG } from '../config';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { AddFormModalService } from '../core/add-form-modal.service';
import { BadgeModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import {
    CarsListComponent,
    TotalCostComponent,
    ListHeaderRowComponent,
    ListRowComponent,
    CarDetailComponent,
    CarResolverService,
    CarsListResolverService,
    IncomeTaxComponent,
    CostSharedService
} from './';

@NgModule({
    declarations: [ CarsListComponent, TotalCostComponent, ListHeaderRowComponent, ListRowComponent, CarDetailComponent, IncomeTaxComponent ],
    exports: [
        CarsListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        PerfectScrollbarModule,
        RouterModule,
        ButtonsModule,
        WavesModule,
        FontAwesomeModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        BadgeModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: API_URL,
            useValue: environment.apiUrl
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: MY_PERFECTSCROLLBAR_CONFIG
        },
        CarResolverService,
        CarsListResolverService,
        AddFormModalService,
        CostSharedService
    ]
})
export class CarsModule {
}
