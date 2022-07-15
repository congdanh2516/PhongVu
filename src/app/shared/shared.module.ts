import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertInfoComponent } from './components/advert-info/advert-info.component';
import { CategoryComponent } from './components/category/category.component';
import { BriefNameProductPipe } from './pipe/briefNameProduct/brief-name-product.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderModule } from './components/header/header.module';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorInputFormComponent } from './components/error-input-form/error-input-form.component';

@NgModule({
  declarations: [
    AdvertInfoComponent,
    CategoryComponent,
    FooterComponent,
    BriefNameProductPipe,
    LoaderComponent,
    ErrorInputFormComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    HeaderModule
  ],
  exports : [
    AdvertInfoComponent,
    CategoryComponent,
    BriefNameProductPipe,
    LoaderComponent,
    FooterComponent,
    ErrorInputFormComponent
  ]
})
export class SharedModule { }
