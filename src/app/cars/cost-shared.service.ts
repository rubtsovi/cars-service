import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CostSharedService {
    private _totalCostSource$ = new Subject<number>();

    public shareCost( cost: number ) {
        this._totalCostSource$.next(cost);
    }

    get totalCostSource$(): Subject<number> {
        return this._totalCostSource$;
    }
}
