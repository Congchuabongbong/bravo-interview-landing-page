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
    public articleList!: Article[]; //38
    public chuckArticle!: Article[]; // 16 (22)
    private paginate: number = 6;
    private start: number = 0;
    private end: number = this.paginate;

    constructor(
        private apiService: ApiServiceService,
        private parseXmlToObj: ParseXmlToObjPipe,
        private articleService: ArticleServiceService,
    ) {}
    public articleListFake = this.articleService.articleList;
    ngOnInit(): void {
        this.getArticle();
        this.paginateArticle(this.articleList);
    }
    public async getArticle(): Promise<any> {
        let dataXML: any = await this.apiService.getData('assets/data.xml', MediaTypes.XML);
        let dataObj: any = this.parseXmlToObj.transform(dataXML);
        this.articleList = this.articleService.formatArticleFromData(dataObj.RSS.CHANNEL[0].ITEM);
        this.chuckArticle = this.articleList.splice(this.start, this.end);
        console.log(this.chuckArticle.length);
    }

    public paginateArticle(articleList: Article[]) {}
    public isLoading: boolean = false;
    onScrollDown(event: any): void {
        this.isLoading = true;
        if (this.paginate > this.articleList.length) {
            this.isLoading = false;
        }
        setTimeout(() => {
            if (this.paginate > this.articleList.length) {
                this.chuckArticle.push(...this.articleList.splice(this.start, this.articleList.length));
                return;
            }
            this.chuckArticle.push(...this.articleList.splice(this.start, this.end));
            this.isLoading = false;
        }, 2000);
    }
}
