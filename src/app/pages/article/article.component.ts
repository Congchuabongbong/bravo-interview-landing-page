import { Component, OnInit } from '@angular/core';
import { ParseXmlToObjPipe } from 'src/app/pipe/parse-xml-to-obj.pipe';
import { ApiServiceService, MediaTypes } from 'src/app/services/api-service.service';
@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
    constructor(private apiService: ApiServiceService, private parseXmlToObj: ParseXmlToObjPipe) {}

    ngOnInit(): void {
        this.getArticle();
    }
    public async getArticle(): Promise<any> {
        let dataXML: any = await this.apiService.getData('assets/data.xml', MediaTypes.XML);
        let dataObj: any = this.parseXmlToObj.transform(dataXML);
        console.log(dataObj.RSS.CHANNEL[0].ITEM[0].DESCRIPTION[0].OL[0].LI[0].A[0].$.HREF);
    }
}
