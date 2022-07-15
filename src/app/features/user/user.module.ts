import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AuthenticationModule } from '../user/components/authentication/authentication.module';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
// import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [
    UserComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
    UserRoutingModule
    // MainModule
  ]
})
export class UserModule { }
