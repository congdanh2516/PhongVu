import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()typeName: string;
  @Input()backgroundColor: string = 'rgb(53, 136, 168';
  @Input()cardNumber: string;
  @Input()cardName: string;
  @Input()expireMonth: number;
  @Input()expireYear: number;
  @Input()cvc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
