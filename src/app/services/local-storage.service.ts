import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}
    public getItem(itemName: string): any {
        const item = localStorage.getItem(itemName);
        const numPatt = new RegExp(/^\d+$/);
        const jsonPatt = new RegExp(/[\[\{].*[\}\]]/);
        if (item) {
            if (jsonPatt.test(item)) {
                return JSON.parse(item);
            } else if (numPatt.test(item)) {
                return parseFloat(item);
            } else {
                return item;
            }
        } else {
            return null;
        }
    }
    public setItem(itemName: string, item: any) {
        if (typeof item === 'object') {
            localStorage.setItem(itemName, JSON.stringify(item));
        } else {
            localStorage.setItem(itemName, item);
        }
    }
    public remove(itemName: string) {
        localStorage.removeItem(itemName);
    }
}
