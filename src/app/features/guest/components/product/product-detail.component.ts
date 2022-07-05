import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  banner : Array<any> = [
    {
      name: '',
      src: '../../../../../assets/images/banner/6bf40b448fcd4d78a78cb24411af89a7.png'
    }
  ]

  constructor(private route: ActivatedRoute, private product_sv: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log(params); // {id: '628909b9619e523ac00bb49d'}
      this.product_sv.getProductById(params.id).subscribe((data: any) => {
        this.product = data.data;
        console.log('product: ', this.product);
        
      })
    })
  }

}
