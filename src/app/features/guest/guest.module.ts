import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { GuestRoutingModule } from './guest-routing.module';

import { GuestComponent } from './guest.component';
import { BannerComponent } from './components/main/banner/banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './components/main/product-card/product-card.component';
import { LimitedBannerSaleComponent } from './components/main/limited-banner-sale/limited-banner-sale.component';
import { SwiperModule } from 'swiper/angular';
import { TimerComponent } from './components/main/timer/timer.component';
import { BriefNameProductPipe } from './pipe/briefNameProduct/brief-name-product.pipe';
import { CategoryBannerSaleComponent } from './components/main/category-banner-sale/category-banner-sale.component';
import { BannerSetComponent } from './components/main/banner-set/banner-set.component';
import { OutstandingBrandComponent } from './components/main/outstanding-brand/outstanding-brand.component';
import { CategoryGridComponent } from './components/main/category-grid/category-grid.component';
import { ProductGridComponent } from './components/main/product-grid/product-grid.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { GiftCardComponent } from './components/product/gift-card/gift-card.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    GuestComponent,
    BannerComponent,
    ProductCardComponent,
    LimitedBannerSaleComponent,
    TimerComponent,
    BriefNameProductPipe,
    CategoryBannerSaleComponent,
    BannerSetComponent,
    OutstandingBrandComponent,
    CategoryGridComponent,
    ProductGridComponent,
    ProductDetailComponent,
    GiftCardComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    HttpClientModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    RouterModule,
    HeaderModule,
    GuestRoutingModule
  ],
  exports: [
    GuestComponent,
    BannerComponent,
    LimitedBannerSaleComponent
  ],
  bootstrap: [GuestComponent]
})
export class GuestModule { }
