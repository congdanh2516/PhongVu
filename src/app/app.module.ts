import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { GuestModule } from './features/guest/guest.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { HeaderComponent } from './shared/components/header/header.component';
import { InterceptorService } from './core/service/loader/interceptor.service';
import { StripeModule } from 'stripe-angular';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { NgxStripeModule } from 'ngx-stripe';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// import { HiddenPasswordPipe } from './core/pipe/hiddenPassword/hidden-password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // HiddenPasswordPipe,
    // FooterComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // GuestModule,
    SharedModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    RouterModule,
    StripeModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,
    NgxStripeModule.forRoot('pk_test_51KxEc0JsyzcmxeMthvDJvy8lLHbDXIU3uggTgPC4oXvUDwL1DNt7srJwYKzzJyG7NLDv9MjprFy7DZPgoHxieMaS00tFsI8FNI'),
    NgxIntlTelInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
