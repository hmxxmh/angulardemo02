import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { PcateComponent } from './components/product/pcate/pcate.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    ProductComponent,
    NewsDetailComponent,
    ProductcontentComponent,
    WelcomeComponent,
    SettingComponent,
    PlistComponent,
    PcateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
