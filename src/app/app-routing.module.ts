//** import from libraries
import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
//** import from sources */
import { IndexComponent } from './pages/home/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { ErrorComponent } from './pages/error/error.component';
import routesConfig from './config/routes';
//**Route config here */
const routes: Routes = [
    { path: routesConfig.home, title: 'Home', component: IndexComponent },
    { path: routesConfig.contact, title: 'Contact', component: ContactComponent },
    { path: routesConfig.article, title: 'Article', component: ArticleComponent },
    { path: '', redirectTo: routesConfig.home, pathMatch: 'full' },
    { path: '**', component: ErrorComponent },
];
@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot) {
        const title = this.buildTitle(routerState);
        if (title !== undefined) {
            this.title.setTitle(`Angular | ${title}`);
        }
    }
}
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
