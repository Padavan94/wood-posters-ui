import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CollectionsPageComponent } from './components/pages/collections-page/collections-page.component';
import { TrendsPageComponent } from './components/pages/trends-page/trends-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { HomeSliderComponent } from './components/common/home-slider/home-slider.component';
import { PopularProductsComponent } from './components/common/popular-products/popular-products.component';
import { PopularCollectionsComponent } from './components/common/popular-collections/popular-collections.component';
import { InteractiveImageComponent } from './components/common/interactive-image/interactive-image.component';
import { SubscribeNewsComponent } from './components/common/subscribe-news/subscribe-news.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'search',
    component: SearchPageComponent
  },
  { path: 'home',
    component: HomePageComponent
  },
  { path: 'about-us',
    component: AboutUsPageComponent
  },
  { path: 'product',
    component: ProductPageComponent
  },
  { path: 'collections',
    component: CollectionsPageComponent
  },
  { path: 'trends',
    component: TrendsPageComponent
  },
  { path: 'category',
    component: CategoryPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomePageComponent,
    SearchPageComponent,
    CategoryPageComponent,
    ProductPageComponent,
    CollectionsPageComponent,
    TrendsPageComponent,
    PaymentPageComponent,
    AboutUsPageComponent,
    HomeSliderComponent,
    PopularProductsComponent,
    PopularCollectionsComponent,
    InteractiveImageComponent,
    SubscribeNewsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxCarouselModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
