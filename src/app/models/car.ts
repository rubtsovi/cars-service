import {Client} from './client';

export interface Car {
    id?: number;
    model: string;
    type: string;
    year: string;
    color: string;
    plate: string;
    deliveryDate: string;
    deadline: string;
    clientFirstName: string;
    clientSurname: string;
    power: number;
    cost: number;
    isFullyDamaged: boolean;
}
