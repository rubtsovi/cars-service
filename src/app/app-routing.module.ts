import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarResolverService } from './cars/car-resolver.service';
import { CarsListResolverService } from './cars/cars-list-resolver.service';

const routes: Route[] = [
    {
        path: 'cars',
        component: CarsListComponent,
        resolve: { cars: CarsListResolverService }
    },
    {
        path: 'cars/:id',
        component: CarDetailComponent,
        resolve: { car: CarResolverService }
    },
    {
        path: '',
        redirectTo: '/cars',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
