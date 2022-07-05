import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-banner-set',
  templateUrl: './banner-set.component.html',
  styleUrls: ['./banner-set.component.scss']
})
export class BannerSetComponent implements OnInit, OnChanges {


  @Input()pictureArray : Array<any> = [];
  width : string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      let widthNotSpacing = 100 - 1.25 * (this.pictureArray.length-1);
      this.width = widthNotSpacing / this.pictureArray.length + "%";
  }

}
