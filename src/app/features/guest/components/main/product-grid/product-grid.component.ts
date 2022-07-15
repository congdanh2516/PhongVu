import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  productList: Array<any> = [];
  size = {width: '242.5px', height: '326px'}
  p: number = 1;
  next : string = '<i class="fa-solid fa-chevron-right"></i>'

  constructor(private product_sv: ProductService) { }

  ngOnInit(): void {
    this.product_sv.getProductList().subscribe((data: any) => {
      this.productList = data.data;
    })
  }

}
