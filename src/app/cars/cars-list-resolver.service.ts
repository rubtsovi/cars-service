import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarsService } from './cars.service';

@Injectable()
export class CarsListResolverService implements Resolve<Car[]> {

    constructor( private _carsService: CarsService ) {
    }


    resolve( route: ActivatedRouteSnapshot ): Observable<Car[]> {
        return this._carsService.getCars();
    }
}
