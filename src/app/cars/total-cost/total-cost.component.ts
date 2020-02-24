import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'cs-total-cost',
    template: `
        <div class="row">
            <div class="col-12">
                <div class="d-flex bg-white text-uppercase justify-content-end align-items-start p-3">
                    <div class="alert alert-warning small px-2 mb-0 py-1 mr-4" *ngIf="_isPriceLowerThenThreshold">
                        <fa-icon [icon]="_warningIcon"></fa-icon>
                        Całkowity koszt zleceń jest mniejszy niż
                        {{ _priceThreshold | currency: 'PLN' }}
                    </div>
                    <div class="text-right w-50">
                        <div class="font-weight-bold text-info lead">Total cost: {{ totalCost | currency: 'PLN' }} </div>
                        <cs-income-tax></cs-income-tax>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: []
})
export class TotalCostComponent implements OnChanges {
    @Input() totalCost: number;
    @Input() isGrossCostShown: boolean;
    @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
    private _VAT = 1.23;
    private _priceThreshold = 10000;
    private _isPriceLowerThenThreshold: boolean;
    private _warningIcon: IconDefinition = faExclamationTriangle;

    public showGross(): void {
        this.shownGross.emit(this.totalCost * this._VAT);
    }


    ngOnChanges( changes: SimpleChanges ): void {
        if (typeof changes.totalCost !== 'undefined') {
            this._isPriceLowerThenThreshold = changes.totalCost.currentValue < this._priceThreshold;

            if (!changes.totalCost.firstChange) {
                this.totalCost = changes.totalCost.currentValue;
                if (this.isGrossCostShown) {
                    this.showGross();
                }
            }
        }
    }
}
