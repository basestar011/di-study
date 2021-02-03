import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
    useFactory: () => new Service('dependency'),
})
export class Service {
    constructor(private dep: string) {
    }
}