import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from '../user/components/authentication/authentication.component';
import { CartComponent } from '../user/components/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { GuestComponent } from './guest.component';
// import { MainModule } from '../user/components/main/main.module';

const routes: Routes = [
    { path: '', component: GuestComponent,
        children: [
            { path: '', component: MainComponent},
            
            // { path: 'login', component: AuthenticationComponent},
            { path: 'cart', component: CartComponent},
        ]
    },
];

  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestRoutingModule { }