//** import from libraries */
import { Component, OnInit } from '@angular/core';
//** import from sources */
import { ParseXmlToObjPipe } from 'src/app/pipe/parse-xml-to-obj.pipe';
import { ApiServiceService, MediaTypes } from 'src/app/services/api-service.service';
import { ArticleServiceService, Article } from 'src/app/services/article-service.service';
@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
    //**Property declared component start here:
    public articleList!: Article[];
    public chuckArticle!: Article[];
    private paginate: number = 6; // default paginate 6items/page
    private startSplice: number = 0;
    private endSplice: number = this.paginate;
    public isLoading: boolean = false;
    //**Constructor here:
    constructor(
        private apiService: ApiServiceService,
        private articleService: ArticleServiceService,
        private parseXmlToObj: ParseXmlToObjPipe,
    ) {}
    //**lifecycle hooks start here:
    ngOnInit(): void {
        //Get Article when component initiate here!
        this.getArticle();
    }
    //** field function start here:
    public async getArticle(): Promise<any> {
        let dataXML: any = await this.apiService.getData('assets/data.xml', MediaTypes.XML); //call api using api service
        let dataObj: any = this.parseXmlToObj.transform(dataXML); //parse XML to object using pipe custom
        this.articleList = this.articleService.formatArticleFromData(dataObj.RSS.CHANNEL[0].ITEM); // format data to article
        // fake call api when it's first page! default loading first page when the user visits the page for the first time
        this.chuckArticle = this.articleList.splice(this.startSplice, this.endSplice);
    }

    //** Event Binding start here:
    onScrollDown(event: any): void {
        this.isLoading = true; // turn on loading during time call api
        //check when last page to turn off loading!
        if (this.articleList.length === 0) {
            this.isLoading = false;
            return;
        }
        // fake during time call api when user scrolled! Default 1s
        const timer = setTimeout(() => {
            //check paginate if it's last page
            if (this.paginate > this.articleList.length) {
                this.chuckArticle.push(...this.articleList.splice(this.startSplice, this.articleList.length));
                return;
            }
            //fake paginate! when user scrolled will push items of next page into chuckArticle
            this.chuckArticle.push(...this.articleList.splice(this.startSplice, this.endSplice));
            this.isLoading = false; //turn off loading when api completed
            clearTimeout(timer);
        }, 1500);
    }
}
