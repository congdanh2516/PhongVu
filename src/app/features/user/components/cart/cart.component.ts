import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/service/local-storage/local-storage.service';
import { ProductService } from 'src/app/features/guest/services/product/product.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { CheckoutService } from '../../services/checkout/checkout.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: any;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  idProduct : string = "628909b9619e523ac00bb49d";
  // choose: boolean = true;
  productLocal : any = [];
  task : Task;
  allComplete : boolean = false;
  isLoading : boolean = true; //product list
  isLoadingTotal : boolean = false;
  total : number = 0;

  constructor(private storage_sv: LocalStorageService,
              private product_sv: ProductService, 
              private router: Router,
              private checkout_sv: CheckoutService,
              private auth_sv: AuthenticationService) { }

  ngOnInit(): void {
    this.storage_sv.removeItem('productsAreChooesed');
    this.productLocal = this.storage_sv.getItem('cart');
    this.productLocal.forEach((item: any) => {
      item.completed = true;
    });
    this.allComplete = true;
    this.task = {
      name: 'Indeterminate',
      completed: true,
      color: 'primary',
      subtasks: this.productLocal,
    };
    console.log("task", this.task);
    this.calculateTotal('');

    

    setTimeout(() => {
      this.isLoading = false;
    }, 1700)
  }


  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every((t: any) => t.completed);
    console.log("task.subtask", this.task.subtasks);
    console.log("a", this.task.subtasks);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter((t: any) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t: any) => (t.completed = completed));
  }

  calculateTotal (value: any) {
    if(value != '') {
      console.log("value: ", value, this.task.subtasks);
      for(let i=0; i<this.task.subtasks.length; i++) {
        if(this.task.subtasks[i].productId == value) {
          console.log("Subtask i: ", this.task.subtasks[i]);
          this.task.subtasks.splice(i,1);
          return;
        }
      }
      console.log("Subtask after delete: ", this.task.subtasks);
    }
    this.productLocal = this.storage_sv.getItem('cart');
    // this.task.subtasks = this.productLocal;
    this.total = 0;
    this.isLoadingTotal = true;
    let i = 0;
    this.productLocal.forEach((product: any) => {
      i++;
      this.product_sv.getProductById(product.productId).subscribe((data: any) => {
        console.log("price", data.data.price * product.quantity);
        this.total += data.data.price * 0.9 * product.quantity;
        console.log("total", this.total);
        console.log("i", i);
        if(i == this.productLocal.length) {
          this.isLoadingTotal = false;
        } 
      })
    });
  }

  pay () {
    if(this.auth_sv.loggedIn()) {
       this.router.navigateByUrl('/confirm-payment');
    }
   else {
     this.router.navigateByUrl("/login");
   }
    let productsAreChoosed: any = [];
    this.task.subtasks.forEach((product: any) => {
      if(product.completed) {
        let productIsChoosed: any = {};
        productIsChoosed.productId = product.productId;
        productIsChoosed.quantity = product.quantity;
        productsAreChoosed.push(productIsChoosed);
      }
    });
    this.storage_sv.setItem('productsAreChoosed', productsAreChoosed)
  }

}
