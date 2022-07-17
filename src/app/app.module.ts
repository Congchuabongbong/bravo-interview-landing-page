//** import libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//** import source*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './pages/home/components/banner/banners.component';
import { ImageComponent } from './pages/home/components/image/images.component';
import { StepComponent } from './pages/home/components/step/steps.component';
import { DownloadComponent } from './pages/home/components/download/download.component';
import { IndexComponent } from './pages/home/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { ButtonComponent } from './components/button/button.component';
import { ParseXmlToObjPipe } from './pipe/parse-xml-to-obj.pipe';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        ImageComponent,
        StepComponent,
        DownloadComponent,
        IndexComponent,
        BannerComponent,
        ContactComponent,
        ArticleComponent,
        ButtonComponent,
        ParseXmlToObjPipe,
        ErrorComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, InfiniteScrollModule],
    providers: [ParseXmlToObjPipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
