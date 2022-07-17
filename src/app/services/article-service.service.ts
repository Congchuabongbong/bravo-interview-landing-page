import { Injectable } from '@angular/core';
export interface Article extends Source {
    pubDate: Date;
    source: Source;
}
type Source = {
    title: string;
    link: string;
};
@Injectable({
    providedIn: 'root',
})
export class ArticleServiceService {
    constructor() {}
    //**Format Article Object*/
    public formatArticleFromData(items: any[]): any {
        const articleList: Article[] = items.map((item) => {
            const article: Article = {
                link: item.LINK[0],
                title: item.TITLE[0],
                pubDate: item.PUBDATE[0],
                source: {
                    title: item.SOURCE[0]._,
                    link: item.SOURCE[0].$.URL,
                },
            };
            return article;
        });
        return articleList;
    }
}
