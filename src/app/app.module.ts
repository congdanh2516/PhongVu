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

@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,FooterComponent
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
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
