import { Injectable } from '@angular/core';
export enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
}
@Injectable({
    providedIn: 'root',
})
export class ApiServiceService {
    constructor() {}

    public async getData(url: string, mediaType: MediaTypes = MediaTypes.JSON): Promise<any> {
        try {
            const response: any = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': mediaType,
                    'Access-Control-Allow-Origin': '*',
                },
            });
            let data: any;
            if (mediaType === 'application/xml') {
                data = await response.text();
                return data;
            }
            data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}
