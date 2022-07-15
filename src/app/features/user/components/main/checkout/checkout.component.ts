import { Component, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripePaymentElementComponent, StripeCardComponent } from 'ngx-stripe';
import { StripeElementsOptions, PaymentIntent } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  isLoading: boolean = true;
  hiddenButtonPay: boolean = false;
  cardInfo: FormGroup;
  isLoadingPay: boolean = false;
  payByThisCard: boolean = false;

  @ViewChild(StripePaymentElementComponent)
  paymentElement: StripePaymentElementComponent;

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  constructor( private http: HttpClient,
    // private fb: FormBuilder,
    private stripeService: StripeService,
    private checkout_sv: CheckoutService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CheckoutComponent>) { 
      this.cardInfo = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]]
      })

    }

  ngOnInit(): void {
    console.log("idAddressIsChoosed: ", this.checkout_sv.orderInfo);
    this.checkout_sv.createPaymentIntent(2000).subscribe((data: any) => {
      this.elementsOptions.clientSecret = data.data.client_secret;
      console.log("chekcout: ", this.elementsOptions.clientSecret);
      setTimeout(() => {
        this.isLoading = false;
      }, 500)
      setTimeout(() => {
        this.hiddenButtonPay = true;
      }, 1000)
    })
  }

  addNewCard() {
    this.isLoadingPay = true;
    console.log("user info: ", this.cardInfo.value);
    this.stripeService.confirmSetup({
      elements: this.paymentElement.elements,
      confirmParams: {
        payment_method_data: {
          billing_details: this.cardInfo.value
        },
        return_url: ''
      },
      redirect: 'if_required'
    }).subscribe((data: any) => {
      console.log("New card info: ", data);
      if(this.payByThisCard) { //add and pay by itself
        this.checkout_sv.orderInfo.paymentMethodId = data.setupIntent.payment_method;
      
        this.checkout_sv.order().subscribe((data: any) => {
          console.log("Order service: ", this.checkout_sv.orderInfo);
          console.log("Order check: ", data);
          this.isLoadingPay = false;
        })
      }
      this.dialogRef.close();
    });
  }

  addNewNPay () {
    this.stripeService.confirmSetup({
      elements: this.paymentElement.elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: 'sfg'
          }
        },
        return_url: ''
      },
      redirect: 'if_required'
    }).subscribe((data: any) => { //get paymentMethodID here
      console.log("pay: ", data);
      this.checkout_sv.orderInfo.paymentMethodId = data.setupIntent.payment_method;
      
      this.checkout_sv.order().subscribe((data: any) => {
        console.log("Order service: ", this.checkout_sv.orderInfo);
        console.log("Order check: ", data);
      })
    })
  }



}
