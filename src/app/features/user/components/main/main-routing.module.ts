import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthenticationGuard } from '../../guards/login-authentication/login-authentication.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: MainComponent,
        children: [
            { path: '', component: ProfileComponent, canActivate: [LoginAuthenticationGuard]},
            // { path: 'confirm-payment', component: ConfirmPaymentComponent}
        ]
    }
];

  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }