import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-category-banner-sale',
  templateUrl: './category-banner-sale.component.html',
  styleUrls: ['./category-banner-sale.component.scss']
})
export class CategoryBannerSaleComponent implements OnInit, OnChanges {

  @Input()background : string;
  productList: Product[] = [];
  size = {width: '226px', height: '314px'}

  constructor(private product_sv: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList () {
    this.product_sv.getProductList().subscribe(data => {
      this.productList = data.data;
      console.log("Product list", this.productList);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.background);
  }

}
