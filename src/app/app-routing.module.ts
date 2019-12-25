import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { PcateComponent } from './components/product/pcate/pcate.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'setting',
                component: SettingComponent
            },
            {
                path: '**',
                component: WelcomeComponent
            }
        ]
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'product',
        component: ProductComponent,
        children: [
            {
                path: 'plist',
                component: PlistComponent
            },
            {
                path: 'pcate',
                component: PcateComponent
            },
            {
                path: '**',
                component: PlistComponent
            }
        ]
    },
    {
        path: 'newsDetail/:aid',
        component: NewsDetailComponent
    },
    {
        path: 'productcontent',
        component: ProductcontentComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
