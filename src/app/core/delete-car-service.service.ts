import { Injectable } from '@angular/core';
import { CarsService } from '../cars/cars.service';
import { Car } from '../models/car';

@Injectable()
export class DeleteCarServiceService {

    constructor(private _carsService: CarsService) { }

    public showDeleteConfirmationDialog(car: Car) : void {

    }
}
