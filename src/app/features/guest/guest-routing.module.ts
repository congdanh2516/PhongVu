import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { GuestComponent } from './guest.component';

const routes: Routes = [
    { path: '', component: GuestComponent,
        children: [
            { path: '', component: MainComponent},
            { path: 'product/:id', component: ProductDetailComponent}
        ]
    },
];

  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestRoutingModule { }