import { Component, OnDestroy, OnInit } from '@angular/core';
import { CostSharedService } from '../cost-shared.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'cs-income-tax',
    template: `
        <div class="font-weight-bold text-info lead">Podatek dochodowy: {{ incomeSum | currency: 'PLN' }}</div>
    `
})
export class IncomeTaxComponent implements OnDestroy {

    private incomeTax = 18;
    private _incomeSum: number;
    private _costSubscription: Subscription;

    constructor( private _costSharedService: CostSharedService ) {
        this._costSharedService.totalCostSource$.subscribe(( cost: number ) => {
            this._incomeSum = cost * this.incomeTax / 100;
        });
    }


    ngOnDestroy(): void {
        if (this._costSubscription) {
            this._costSubscription.unsubscribe();
        }
    }

    get incomeSum(): number {
        return this._incomeSum;
    }

    set incomeSum( value: number ) {
        this._incomeSum = value;
    }
}
