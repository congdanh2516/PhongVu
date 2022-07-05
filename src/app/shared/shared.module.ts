import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertInfoComponent } from './components/advert-info/advert-info.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AdvertInfoComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AdvertInfoComponent,
    CategoryComponent
  ]
})
export class SharedModule { }
