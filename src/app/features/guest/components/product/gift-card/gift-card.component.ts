import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent implements OnInit {

  @Input()sale: number;
  @Input()expire: Date;
  apply : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
