import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})
export class CategoryGridComponent implements OnInit {

  @Input()imageSrc : string;
  @Input()categoryArray : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
