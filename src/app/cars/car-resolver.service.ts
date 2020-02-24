import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { CarsService } from './cars.service';

@Injectable()
export class CarResolverService implements Resolve<Car> {

    constructor( private _carService: CarsService ) {
    }


    resolve( route: ActivatedRouteSnapshot ): Observable<Car> {
        return this._carService.getCar(route.params[ 'id' ]);
    }
}
