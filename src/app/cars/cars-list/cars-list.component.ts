import { AfterContentInit, AfterViewInit, Component, Inject, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { Car } from '../../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { API_URL } from '../../config';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { AddFormModalService } from '../../core/add-form-modal.service';
import { Subscription } from 'rxjs';
import { CostSharedService } from '../cost-shared.service';

@Component({
    selector: 'cs-cars-list',
    templateUrl: './cars-list.component.html',
    styleUrls: [ './cars-list.component.scss' ],
    providers: [ CarsService ]
})
export class CarsListComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
    @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
    private _cars: Car[];
    private _totalCost: number;
    private _grossCost: number;
    private _$addCar: Subscription;
    private _isGrossCostShown = false;

    public constructor( private _route: ActivatedRoute,
                        private _addFormModalService: AddFormModalService,
                        private _carsService: CarsService,
                        private _costSharedService: CostSharedService) {
    }

    ngOnInit() {
        this.getCars();
        this._$addCar = this._addFormModalService.getAddCarEvent().subscribe(( car: Car ) => {
            this._cars.push(car);
            this.setTotalCost();
            if (this._grossCost) {
                this._grossCost += car.cost * 1.23;
            }
        });
    }


    ngAfterContentInit(): void {
        // this._costSharedService.shareCost(this._totalCost);
    }


    ngAfterViewInit(): void {
        // this._costSharedService.shareCost(this.totalCost);
    }

    ngOnDestroy(): void {
        this._$addCar.unsubscribe();
    }

    public get cars(): Car[] {
        return this._cars;
    }

    public get totalCost(): number {
        return this._totalCost;
    }

    private setTotalCost(): void {
        this._totalCost = this._cars
        .map(( car ) => car.cost)
        .reduce(( previousValue, currentValue ) => previousValue + currentValue);
        this._costSharedService.shareCost(this._totalCost);
    }

    public removeCar( car: Car ) {
        this._carsService.removeCar(car.id).subscribe(() => {
            this.cars.splice(this.cars.indexOf(car), 1);
            this.setTotalCost();
        });
    }

    public get grossCost(): number {
        return this._grossCost;
    }

    public set grossCost( value: number ) {
        if (!this._grossCost) {
            this._isGrossCostShown = true;
        }
        this._grossCost = value;
    }

    public showGross(): void {
        this.totalCostRef.showGross();
    }

    public getCars(): void {
        this._cars = this._route.snapshot.data[ 'cars' ];
        this.setTotalCost();
        this._costSharedService.shareCost(this._totalCost);
    }


    get isGrossCostShown(): boolean {
        return this._isGrossCostShown;
    }
}

