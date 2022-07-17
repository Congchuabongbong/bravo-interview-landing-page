//** import from libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//** import from sources */
import { IndexComponent } from './pages/home/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { ErrorComponent } from './pages/error/error.component';
import routesConfig from './config/routes';
//**Route config here */
const routes: Routes = [
    { path: routesConfig.home, component: IndexComponent },
    { path: routesConfig.contact, component: ContactComponent },
    { path: routesConfig.article, component: ArticleComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
