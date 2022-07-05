import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outstanding-brand',
  templateUrl: './outstanding-brand.component.html',
  styleUrls: ['./outstanding-brand.component.scss']
})
export class OutstandingBrandComponent implements OnInit {

  @Input()brandArray : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
