import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../../cars/cars.service';
import { Car } from '../../models/car';
import { AddFormModalService } from '../add-form-modal.service';

@Component({
    selector: 'cs-add-form-modal',
    templateUrl: './add-form-modal.component.html',
    styleUrls: [ './add-form-modal.component.scss' ]
})
export class AddFormModalComponent implements OnInit {

    private _addCarForm: FormGroup;

    constructor( public modalRef: MDBModalRef,
                 private _formBuilder: FormBuilder,
                 private _carsService: CarsService,
                 private _addFormModalService: AddFormModalService) {
    }

    ngOnInit() {
        this._addCarForm = this.buildForm();
    }

    private buildForm(): FormGroup {
        return this._formBuilder.group({
            model: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            year: new FormControl('', Validators.required),
            color: new FormControl('', Validators.required),
            plate: new FormControl('', [ Validators.required, Validators.minLength(4), Validators.maxLength(8) ]),
            deliveryDate: new FormControl('', Validators.required),
            deadline: new FormControl('', Validators.required),
            clientFirstName: new FormControl('', Validators.required),
            clientSurname: new FormControl('', Validators.required),
            power: new FormControl('', Validators.required),
            cost: new FormControl('', Validators.required),
            isFullyDamaged: ''
        });
    }

    public addCar(): void {
        this._carsService.addCar(this._addCarForm.value).subscribe(( car: Car ) => {
            this._addFormModalService.sendAddCarEvent(car);
            this.modalRef.hide();
        });
    }

    get addCarForm(): FormGroup {
        return this._addCarForm;
    }
}
