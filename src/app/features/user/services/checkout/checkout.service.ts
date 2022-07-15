import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentIntent } from '@stripe/stripe-js';
// // import { Stripe } from 'stripe-angular';
// import { Stripe } from '@stripe/stripe-js';

// export const PLUTO_ID = new InjectionToken<string>('[PLUTO] ClientID');
import { Config } from 'src/app/config';
import { AuthenticationService } from '../authentication/authentication.service';
import { LocalStorageService } from 'src/app/core/service/local-storage/local-storage.service';
import { UserInfoService } from '../user-info/user-info.service';

const httpOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public orderInfo: any = {}; 
  public productsAreChoosed: Array<any> = [];

  constructor(private http: HttpClient,
              private auth_sv: AuthenticationService, 
              private storage_sv: LocalStorageService, 
              private user_sv: UserInfoService) { }

  addPaymentMethod () { //get client secret
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'application/json')
    let api = Config.url + "/users/me/payment-methods";
    return this.http.post(api, {}, {headers: header});
  }

  getPaymentMethod () { //get client secret
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'application/json')
    let api = Config.url + "/users/me/payment-methods";
    return this.http.get(api, {headers: header});
  }

  // createPaymentIntent(params: Stripe.PaymentIntentCreateParams): Observable<PaymentIntent> {
  //   let api = Config.url + "/users/me/payment-methods";
  //   return this.http.post<PaymentIntent>(
  //     `${api}/payments/create-payment-intent`,
  //     params,
  //     { headers: { merchant: this.clientId } }
  //   );
  // }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    this.auth_sv.loadToken();
    console.log("Token: ", `Bearer ${this.auth_sv.authToken}`);
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'application/json')
    let api = Config.url + "/users/me/payment-methods";
    return this.http.post<PaymentIntent>(api, { amount }, {headers: header});
  }

  order () {
    if(this.storage_sv.getItem('productsAreChoosed')) {
      this.orderInfo.items = this.storage_sv.getItem('productsAreChoosed')
    }
    else {
      this.orderInfo.items = this.storage_sv.getItem('cart')
    }
   
    // if(!this.orderInfo.address) { //default address
    //   this.user_sv.getAddress().subscribe((data: any) => {
    //     this.orderInfo.address = data.data[0];
    //   })
    // }

    console.log("Order: ", this.orderInfo);

    this.auth_sv.loadToken();
    let header = new HttpHeaders()
    .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
    .set('Content-Type' , 'application/json')
    let api = Config.url + "/orders";
    return this.http.post(api, this.orderInfo, {headers: header});
  }

  getListPayment () {
    this.auth_sv.loadToken();
    console.log("Token: ", `Bearer ${this.auth_sv.authToken}`);
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'application/json')
    let api = Config.url + "/users/me/payment-methods"
    return this.http.get(api, {headers: header});
  }
}
