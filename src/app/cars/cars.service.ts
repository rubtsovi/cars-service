import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable()
export class CarsService {

    constructor( @Inject(API_URL) private _apiUrl: string,
                 private _httpClient: HttpClient ) {
    }

    public getApiUrl(): string {
        return this._apiUrl;
    }

    public getCars(): Observable<Car[]> {
        return this._httpClient.get<Car[]>(`${this.getApiUrl()}/cars`);
    }

    public getCar( id: number ): Observable<Car> {
        return this._httpClient.get<Car>(`${this._apiUrl}/cars/${id}`);
    }

    public addCar( data: Car ): Observable<Car> {
        return this._httpClient.post<Car>(`${this._apiUrl}/cars`, data);
    }

    public editCar( id: number, data: Car ): Observable<Car> {
        return this._httpClient.put<Car>(`${this._apiUrl}/cars/${id}`, data);
    }

    public removeCar( id: number ): Observable<void> {
        return this._httpClient.delete<void>(`${this._apiUrl}/cars/${id}`);
    }
}
