import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../../models/car';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbBtnDirective } from 'angular-bootstrap-md';

@Component({
    selector: 'cs-car-detail',
    templateUrl: './car-detail.component.html',
    styleUrls: [ './car-detail.component.scss' ],
    providers: [ CarsService ]
})
export class CarDetailComponent implements OnInit {

    private _car: Car;
    private _backIcon: IconDefinition = faChevronCircleLeft;
    private _editForm: FormGroup;
    private _showInputs = false;
    @ViewChild('activateEditionBtn') private _editBtn: ElementRef;

    constructor( private _carsService: CarsService,
                 private _route: ActivatedRoute,
                 private _formBuilder: FormBuilder,
                 private _renderer: Renderer2 ) {
    }

    ngOnInit() {
        this.loadCar();
        this._editForm = this.buildForm();
    }

    private buildForm(): FormGroup {
        return this._formBuilder.group({
            model: new FormControl(this._car.model, Validators.required),
            type: new FormControl(this._car.type, Validators.required),
            year: new FormControl(this._car.year, Validators.required),
            color: new FormControl(this._car.color, Validators.required),
            plate: new FormControl(this._car.plate, [ Validators.required, Validators.minLength(4), Validators.maxLength(8) ]),
            deliveryDate: new FormControl(this._car.deliveryDate, Validators.required),
            deadline: new FormControl(this._car.deadline, Validators.required),
            clientFirstName: new FormControl(this._car.clientFirstName, Validators.required),
            clientSurname: new FormControl(this._car.clientSurname, Validators.required),
            power: new FormControl(this._car.power, Validators.required),
            cost: new FormControl(this._car.cost, Validators.required),
            isFullyDamaged: this._car.isFullyDamaged
        });
    }

    public activateEdition( event: Event ): void {
        this.toggleShowInputs();
        this.toggleEditBtnContext();
    }

    private toggleEditBtnContext(): void {
        if (this._showInputs) {
            // this._editBtn.color = 'danger';
            this._renderer.removeClass(this._editBtn.nativeElement, 'btn-success');
            this._renderer.addClass(this._editBtn.nativeElement, 'btn-danger');
            // this._renderer.setProperty(this._editBtn.nativeElement, 'innerHTML', 'Anuluj');
        } else {
            this._renderer.removeClass(this._editBtn.nativeElement, 'btn-danger');
            this._renderer.addClass(this._editBtn.nativeElement, 'btn-success');
            // this._renderer.setProperty(this._editBtn.nativeElement, 'innerHTML', 'Edytuj');
        }
    }

    private toggleShowInputs(): void {
        this._showInputs = !this._showInputs;
    }

    public confirmCarEdition(): void {
        this._carsService.editCar(this._car.id, this._editForm.value).subscribe(( car: Car ) => {
            this._car = car;
            this.toggleShowInputs();
            this.toggleEditBtnContext();
        });
    }

    public loadCar() {
        this._car = this._route.snapshot.data[ 'car' ];
    }

    set car( value: Car ) {
        this._car = value;
    }

    get car(): Car {
        return this._car;
    }


    get backIcon(): IconDefinition {
        return this._backIcon;
    }

    get editForm(): FormGroup {
        return this._editForm;
    }

    get showInputs(): boolean {
        return this._showInputs;
    }

    get editBtn(): ElementRef {
        return this._editBtn;
    }
}
