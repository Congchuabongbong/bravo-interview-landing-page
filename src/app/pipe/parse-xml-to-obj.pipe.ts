import { Pipe, PipeTransform } from '@angular/core';
import * as xml2js from 'xml2js';
@Pipe({
    name: 'parseXmlToObj',
})
export class ParseXmlToObjPipe implements PipeTransform {
    private parser = new xml2js.Parser({ strict: false, trim: true });
    transform(value: string, ...args: unknown[]): any {
        let dataObj!: any | null;
        if (value) {
            this.parser.parseString(value, (err, result) => {
                let dataString = JSON.stringify(result);
                dataObj = JSON.parse(dataString);
            });
        }
        return dataObj;
    }
}
