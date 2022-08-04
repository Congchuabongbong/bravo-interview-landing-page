import { Injectable } from '@angular/core';
export enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
}
@Injectable({
    providedIn: 'root',
})
export class ApiServiceService {
    private controller = new AbortController();
    private signal = this.controller.signal;
    constructor() {}

    public abortFetch(): void {
        this.controller.abort();
    }
    //**API METHODS start here*/
    //Get method
    public async getData(url: string, mediaType: MediaTypes = MediaTypes.JSON): Promise<any> {
        try {
            const response: any = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': mediaType,
                    'Access-Control-Allow-Origin': '*',
                },
                signal: this.signal,
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
