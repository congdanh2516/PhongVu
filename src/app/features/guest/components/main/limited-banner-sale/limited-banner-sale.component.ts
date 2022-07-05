import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product/product.service';
import { LoaderService } from 'src/app/core/service/loader/loader.service';

@Component({
  selector: 'app-limited-banner-sale',
  templateUrl: './limited-banner-sale.component.html',
  styleUrls: ['./limited-banner-sale.component.scss']
})
export class LimitedBannerSaleComponent implements OnInit {

  cardClicked : string = "left";
  deadline : Date = new Date(2022,6,15);
  productList : Product[] = [];
  size = {width: '178px', height: '266px'}

  constructor(private product_sv: ProductService, public loader_sv: LoaderService) { }

  ngOnInit(): void {
    this.getProductList();
  }
 
  getProductList () {
    this.product_sv.getProductList().subscribe(data => {
      this.productList = data.data;
      console.log("Product list", this.productList);
    })
  }
 

}
