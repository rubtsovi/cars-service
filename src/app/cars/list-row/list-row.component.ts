import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/car';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCarCrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SnotifyPosition, SnotifyService, SnotifyToastConfig, ToastDefaults } from 'ng-snotify';

@Component({
    selector: 'cs-list-row',
    templateUrl: './list-row.component.html',
    styleUrls: [ './list-row.component.scss' ]
})
export class ListRowComponent {

    @Input() private _car: Car;
    @Input() private _isLast: boolean;
    @Input() private _isFirst: boolean;
    @Output() removeBtnClicked: EventEmitter<Car> = new EventEmitter<Car>();

    private _crushedCar: IconDefinition = faCarCrash;
    private _deleteIcon: IconDefinition = faTrashAlt;

    constructor( private _snotifyService: SnotifyService) {
    }

    removeCar( car: Car, event: Event ): void {
        event.stopPropagation();
        this._snotifyService.confirm(
            `Czy na pewno chcesz skasować samochód ${car.model}, właścicielem którego jest ${car.clientFirstName} ${car.clientSurname}?`,
            'Potwierdz akcję kasowania',
            {
                timeout: 5000,
                showProgressBar: true,
                type: 'confirm',
                buttons: [
                    {
                        text: 'Tak',
                        action: (toast) => {
                            this.removeBtnClicked.emit(car);
                            this._snotifyService.remove(toast.id);
                        }
                    },
                    {
                        text: 'Nie',
                        action: (toast) => this._snotifyService.remove(toast.id)
                    }
                ],
                backdrop: .75,
                pauseOnHover: false,
                position: SnotifyPosition.centerCenter
            }
        );
        // this.removeBtnClicked.emit(car);
    }


    get car(): Car {
        return this._car;
    }

    get isLast(): boolean {
        return this._isLast;
    }

    get isFirst(): boolean {
        return this._isFirst;
    }

    get crushedCar(): IconDefinition {
        return this._crushedCar;
    }

    get deleteIcon(): IconDefinition {
        return this._deleteIcon;
    }
}
