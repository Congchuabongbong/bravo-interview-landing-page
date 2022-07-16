import { Component, OnInit } from '@angular/core';
import { ParseXmlToObjPipe } from 'src/app/pipe/parse-xml-to-obj.pipe';
import { ApiServiceService, MediaTypes } from 'src/app/services/api-service.service';
import { ArticleServiceService, Article } from 'src/app/services/article-service.service';
@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
    public articleList: Article[] = [];
    constructor(
        private apiService: ApiServiceService,
        private parseXmlToObj: ParseXmlToObjPipe,
        private articleService: ArticleServiceService,
    ) {}

    ngOnInit(): void {
        this.getArticle();
    }
    public async getArticle(): Promise<any> {
        let dataXML: any = await this.apiService.getData('assets/data.xml', MediaTypes.XML);
        let dataObj: any = this.parseXmlToObj.transform(dataXML);
        this.articleList = this.articleService.formatArticleFromData(dataObj.RSS.CHANNEL[0].ITEM);
    }
}
