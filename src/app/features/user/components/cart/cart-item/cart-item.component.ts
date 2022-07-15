import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader/loader.service';
import { LocalStorageService } from 'src/app/core/service/local-storage/local-storage.service';
import { Product } from 'src/app/features/guest/models/product.model';
import { ProductService } from 'src/app/features/guest/services/product/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit, OnChanges {

  @Output('hasChange') onHandleHasChange = new EventEmitter<any>();
  @Input()idProduct : string;
  @Input()quantity : number = 2;
  @Input()checked: boolean = true;
  product : Product = new Product();
  loading : boolean = false;

  constructor(private product_sv: ProductService, private storage_sv: LocalStorageService, public loader: LoaderService) { }

  ngOnChanges(){
    this.product_sv.getProductById(this.idProduct).subscribe((data: any) => {
      this.product = data.data;
      console.log('productsda', this.product);
    })
  }

  ngOnInit(): void {
  }

  adjust (calculation : string) {
    // console.log("quantityProduct: ", this.quantityProduct(this.product._id));
    if(calculation == "-") {
      this.quantity--;
      this.updateLocal();
      this.onHandleHasChange.emit('');
    }
    if(calculation == "+") {
      this.loading = true;
      this.product_sv.getProductById(this.product._id).subscribe((data: any) => {
        let quantityTemp = this.quantity + 1;
        if(quantityTemp <= data.data.quantity){
          this.quantity++;
          this.updateLocal();
          this.onHandleHasChange.emit('');
        }
        else {
          alert(`Only ${data.data.quantity} product(s) left in stock`);
        }
        this.loading = false;
      })
    }
  }

  updateLocal () {
    //update local storage
    let productLocal = this.storage_sv.getItem('cart');
    console.log('productLocal: ', productLocal);
    let i = 0;
    productLocal.forEach((product: any) => {
      if(product.productId == this.product._id) {
        if(this.quantity == 0) {
          productLocal.splice(i,1);
          console.log("inew", i);
          console.log('producLocal:', productLocal);
        }
        else {
          product.quantity = this.quantity;
        }
      }
      i++;
    });
    this.storage_sv.setItem('cart', productLocal);
  }

  quantityProduct (idProduct: string) {
    this.product_sv.getProductById(idProduct).subscribe((data: any) => {
      console.log("data", data.data.quantity);
      return data.data.quantity;
    })
  }

  deleteProduct(){
    if(confirm('Delete this product, sure?')) {
      let productLocal = this.storage_sv.getItem('cart');
      for(let i=0; i < productLocal.length; i++) {
        if(productLocal[i].productId == this.idProduct) {
            productLocal.splice(i,1);
            this.onHandleHasChange.emit(this.idProduct);
            return this.storage_sv.setItem('cart', productLocal);
        }
      }
    }
  }

}
