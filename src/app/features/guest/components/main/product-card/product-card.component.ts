import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() image: string = '../../../../../assets/images/products/unnamed (14).webp';
  @Input() name: string = "Key board";
  @Input() price: number = 500;
  @Input() sale: number = 20;
  @Input() freeShip: boolean = true;
  @Input() gift: boolean = true;
  @Input() size: any;
  salePrice : number; 

  constructor() { }

  ngOnInit(): void {
    this.salePrice = this.price * (1 - (this.sale / 100));
  }

}
