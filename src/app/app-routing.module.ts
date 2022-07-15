import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './features/guest/components/product/product-detail.component';
import { SignupComponent } from './features/user/components/authentication/signup/signup.component';
import { CartComponent } from './features/user/components/cart/cart.component';import { ConfirmPaymentComponent } from './features/user/components/main/confirm-payment/confirm-payment.component';
import { LoginAuthenticationGuard } from './features/user/guards/login-authentication/login-authentication.guard';

const routes: Routes = [
  { path: 'home', 
    loadChildren: () => import('./features/guest/guest.module').then(x => x.GuestModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login',
    loadChildren: () => import('./features/user/components/authentication/authentication.module').then(x => x.AuthenticationModule) 
  },
  { path: 'cart', component: CartComponent},
  { path: 'profile',
    loadChildren: () => import('./features/user/components/main/main.module').then(x => x.MainModule) 
  },
  { path: 'confirm-payment', component: ConfirmPaymentComponent, canActivate: [LoginAuthenticationGuard]},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
