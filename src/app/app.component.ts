import { Component, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event } from '@angular/router';
import { ModalHostDirective } from './modal-host.directive';
import { ListHeaderRowComponent } from './cars/list-header-row/list-header-row.component';
import { AddFormModalComponent } from './core/add-form-modal/add-form-modal.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
    selector: 'cs-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    private _modalRef: MDBModalRef;
    private _showSpinner: boolean;

    constructor( private _router: Router,
                 private modalService: MDBModalService ) {
        this._router.events.subscribe(( navigationEvent: Event ) => {
            if (navigationEvent instanceof NavigationStart) {
                this._showSpinner = true;
            }
            if (navigationEvent instanceof NavigationEnd) {
                this._showSpinner = false;
            }
        });
    }

    public showModal(): void {
        this._modalRef = this.modalService.show(AddFormModalComponent, {
            class: 'modal-lg'
        });

    }


    get modalRef(): MDBModalRef {
        return this._modalRef;
    }

    get showSpinner(): boolean {
        return this._showSpinner;
    }
}
