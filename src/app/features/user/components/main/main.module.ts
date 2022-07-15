import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { MainRoutingModule } from './main-routing.module';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxStripeModule } from 'ngx-stripe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAddressComponent } from './add-address/add-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './confirm-payment/card/card.component';

@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    ConfirmPaymentComponent,
    CheckoutComponent,
    AddAddressComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxStripeModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
