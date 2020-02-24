import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from '../models/car';

@Injectable()
export class AddFormModalService {

    private form$: Subject<Car> = new Subject<Car>();

    public sendAddCarEvent( car: Car ): void {
        this.form$.next(car);
    }

    public getAddCarEvent(): Observable<Car> {
        return this.form$.asObservable();
    }
}
