import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/service/local-storage/local-storage.service';
import { ProductService } from 'src/app/features/guest/services/product/product.service';
import { AddressService } from '../../../services/address/address.service';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { UserInfoService } from '../../../services/user-info/user-info.service';
import { AddAddressComponent } from '../add-address/add-address.component';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {

  addressList: any;
  productList: any = [];
  productLocal: any = [];
  productsAreChoose: any = []; //get products are choosed from here through 'complete' (true/false) attribute
  techSupportValue: number = 5;
  addressIsChoosed: number = 0;
  paymentMethodIsChoosed: string = "cod";
  cardIsChoosed: number;
  isLoading: boolean = true;
  total : number = 0;
  transportFee: number = 0;
  onsiteSupport: number = 0;
  isLoadingAddress: boolean = false;
  listPaymentMethod: any = [];
  isLoadingPaymentMethod: boolean = false;
  purposeAddressForm: string = '';
  isLoadingBuyNow: boolean = false;

  constructor(private user_sv: UserInfoService,
              public checkout_sv: CheckoutService,
              private strorage_sv: LocalStorageService,
              private product_sv: ProductService,
              public dialog : MatDialog,
              private storage_sv: LocalStorageService,
              private address_sv: AddressService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.storage_sv.getItem('paid')) {
      this.router.navigateByUrl('/home');
    }
    this.user_sv.getAddress().subscribe((data: any) => {
      this.addressList = data.data;
      this.checkout_sv.orderInfo.address = data.data[0];
    })

    this.calculateTotal();
    
    if(this.strorage_sv.getItem('productsAreChoosed')){
      this.productLocal = this.strorage_sv.getItem('productsAreChoosed');
    }
    else {
      this.productLocal = this.strorage_sv.getItem('cart');
    }
    this.productLocal.forEach((product: any) => {
      this.product_sv.getProductById(product.productId).subscribe((data: any) => {
        let productItem : any = {};
        console.log("Product comfirm payment: ", data.data);
        productItem.image = data.data.image;
        productItem.productName = data.data.name;
        productItem.quantity = product.quantity;
        productItem.sale = 10; //%
        productItem.price = data.data.price;
        productItem.productId = data.data._id;
        this.productList.push(productItem);
        console.log("Product Item: ", this.productList);
        setTimeout(() => {
          this.isLoading = false;
        }, 500)
      })
    });
    
    // this.productsAreChoose.forEach((product: any) => {
    //   if(product.completed) {
    //     this.product_sv.getProductById(product.productId).subscribe((data: any) => {
    //       let productItem : any = {};
    //       console.log("Product comfirm payment: ", data.data);
    //       productItem.image = data.data.image;
    //       productItem.productName = data.data.name;
    //       productItem.quantity = product.quantity;
    //       productItem.sale = 10; //%
    //       productItem.price = data.data.price;
    //       this.productList.push(productItem);
    //       console.log("Product Item: ", this.productList);
    //       setTimeout(() => {
    //         this.isLoading = false;
    //       }, 500)
    //     })
    //   }
    // });

   
  }

  openDialog() {
    if(this.paymentMethodIsChoosed == "online") {
      const dialogRef = this.dialog.open(CheckoutComponent , {
        width: '500px',
        height: 'auto'
      });
      dialogRef.afterClosed().subscribe(result => {
        // this.isLoadingPaymentMethod = true;
        this.checkout_sv.getListPayment().subscribe((data: any) => {
          this.listPaymentMethod = data.data;
          // this.isLoadingPaymentMethod = false;
        })
      });
    }
    
  }

  chooseAddressCurrent (addressId: any, i: number) {
    if(!(this.addressIsChoosed == i)) {
      this.isLoadingAddress = true;
      this.addressIsChoosed = i;
      this.user_sv.getAddressById(addressId).subscribe((data: any) => {
        this.checkout_sv.orderInfo.address = data.data;
        this.isLoadingAddress = false;
      })
    }
  }

  choosePaymentMethod(value: string) {
    // this.listPaymentMethod = [];
    this.paymentMethodIsChoosed = value;
    if(this.paymentMethodIsChoosed == "online") {
      this.isLoadingPaymentMethod = true;
      this.checkout_sv.getListPayment().subscribe((data: any) => {
        console.log("List payment: ", data);
        this.listPaymentMethod = data.data;
        this.isLoadingPaymentMethod = false;
      })
    }
  }

  addPaymentMethod () { //getClientSecret
    this.checkout_sv.addPaymentMethod().subscribe((data: any) => {
      console.log("Add payment method: ", data);
    })
    
  }

  calculateTotal () {
    this.productLocal = this.storage_sv.getItem('productsAreChoosed');
    this.total = 0;
    this.productLocal.forEach((product: any) => {
      this.product_sv.getProductById(product.productId).subscribe((data: any) => {
        console.log("price", data.data.price * product.quantity);
        this.total += data.data.price * 0.9 * product.quantity;
      })
    });
  }

  chooseOnsiteSuppor() {
    this.onsiteSupport == 0 ? this.onsiteSupport = 5 : this.onsiteSupport = 0;
  }

  chooseCard(paymentMethodId: string, index: number) {
    this.cardIsChoosed = index;
    this.checkout_sv.orderInfo.paymentMethodId = paymentMethodId;
    console.log("Payment methos id: ", this.checkout_sv.orderInfo);
  }

  pay() {
    this.isLoadingBuyNow=true;
    this.checkout_sv.order().subscribe((data: any) => {
      let productLocal = this.storage_sv.getItem('cart');
      this.productList.forEach((product: any) => {
        
        console.log("Product id: ", product.productId);
        for(let i=0; i<productLocal.length; i++) {
          if(product.productId == productLocal[i].productId) {
            productLocal.splice(i,1);
            return;
          }
        }
      });
      this.storage_sv.setItem('cart', productLocal);
      this.isLoadingBuyNow = false
      window.open(data.data.paymentDetails.charges.data[0].receipt_url, "_self");
      this.storage_sv.setItem('paid', true);
    })
    
  }

  openAddNewAddress() {
    const dialogRef = this.dialog.open(AddAddressComponent, {
      
    })
  }

  modifyAddress(addressId: string) {
    this.purposeAddressForm = addressId;
  }

  openFormAddNewAddress(){
    this.purposeAddressForm = '';
  }

  deleteAddress(addressId: string) {
    if(confirm('Delete this address, sure?')){
      this.isLoadingAddress = true;
      this.address_sv.deleteAddress(addressId).subscribe(() => {
        this.user_sv.getAddress().subscribe((data: any) => {
          this.addressList = data.data;
          this.checkout_sv.orderInfo.address = data.data[0];
          setTimeout(() => {
            this.isLoadingAddress = false;
          }, 500)
        })
      });
     
    }
   
  }
}
