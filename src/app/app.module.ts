import { BrowserModule, EventManager } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsService } from './cars';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ModalHostDirective } from './modal-host.directive';
import { AddFormModalComponent } from './core/add-form-modal/add-form-modal.component';
import { MDBBootstrapModule, MDBModalService } from 'angular-bootstrap-md';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { CarsModule } from './cars/cars.module';



registerLocaleData(localePl);
@NgModule({
    declarations: [
        AppComponent,
        ModalHostDirective,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CarsModule,
        CoreModule,
        MDBBootstrapModule.forRoot(),
        SnotifyModule
    ],
    providers: [
        CarsService,
        MDBModalService,
        {
            provide: LOCALE_ID,
            useValue: 'pl'
        },
        SnotifyService,
        {
            provide: 'SnotifyToastConfig',
            useValue: ToastDefaults
        }
    ],
    bootstrap: [ AppComponent ],
    entryComponents: [ AddFormModalComponent ]
})
export class AppModule {
}
