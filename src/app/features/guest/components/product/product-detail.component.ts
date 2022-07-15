import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/service/loader/loader.service';
import { LocalStorageService } from 'src/app/core/service/local-storage/local-storage.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  expire: Date = new Date(2022, 6, 15);
  isLoadingProduct: boolean = true;
  isLoadingAddToCart: boolean = false;
  banner : Array<any> = [
    {
      name: '',
      src: '../../../../../assets/images/banner/6bf40b448fcd4d78a78cb24411af89a7.png'
    }
  ]

  constructor(private route: ActivatedRoute, 
              private product_sv: ProductService, 
              public loader_sv: LoaderService,
              private storage_sv: LocalStorageService) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    this.route.params.subscribe((params: any) => {
      console.log(params); // {id: '628909b9619e523ac00bb49d'}
      this.isLoadingProduct = true;
      this.product_sv.getProductById(params.id).subscribe((data: any) => {
        this.product = data.data;
        this.isLoadingProduct = false;
      })
    })
  }

  async addToCart (idProduct: string) {
    this.isLoadingAddToCart = true;
    const quantityInStock = await this.quantityProduct(idProduct);
    if(quantityInStock > 0) {
      let product : {productId: string, quantity: number} = {productId: idProduct, quantity: 1};
      if(this.storage_sv.getItem('cart')) { //co san pham trong gio hang
        let existed : boolean = false; //ktra san pham co trong gio hang chua
        let productLocal = this.storage_sv.getItem('cart');
        productLocal.forEach((item: any) => {
          if(item.productId == idProduct){
            console.log("quantityInSTock out if: ", quantityInStock);
            if(quantityInStock >=  item.quantity + 1) {
              console.log("quantityInSTock: ", quantityInStock);
              item.quantity++;
            }
            else {
              alert(`Only ${quantityInStock} in stock left`);
            }
            existed = true;
          }
        });
        existed == false ? productLocal.push(product) : '';
        this.storage_sv.setItem('cart', productLocal);
      }
      else {
        let productLocal = [product];
        this.storage_sv.setItem('cart', productLocal);
      }
    }
    else {
      alert("Out of stock");
    }
    this.isLoadingAddToCart = false;
  }

  async quantityProduct (idProduct: string) {
    console.log("Before call api in function");
    // this.product_sv.getProductById(idProduct).subscribe((data: any) => {
    //   console.log("data", data.data.quantity);
    //   return data.data.quantity;
    // })
    const data = await this.product_sv.getProductById(idProduct).toPromise();
    return data.data.quantity;
  }

}
