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
    public articleList: Article[] = [];
    constructor() {}

    public formatArticleFromData(items: any[]): any {
        let articleList: Article[] = items.map((item) => {
            let article: Article = {
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
