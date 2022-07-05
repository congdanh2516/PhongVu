import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  intervalVar : any;
  currentIndexImage : number = 0;
  imageArray : Array<any> = [
    {name : '', src : '../../../../../assets/images/banner/unnamed (3).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (1).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (2).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (6).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (4).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (5).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed.webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (7).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (8).webp'},
    {name : '', src : '../../../../../assets/images/banner/unnamed (9).webp'}
  ]

  constructor() { 
    
  }

  ngOnInit(): void {
    this.intervalVar = setInterval(() => {
      this.currentIndexImage ++;
      this.currentIndexImage == this.imageArray.length ? this.currentIndexImage = 0 : '';
    }, 8000)
  }

  transferImage(value : number) {
    this.currentIndexImage = value;
    clearInterval(this.intervalVar);
    this.intervalVar = setInterval(() => {
      this.currentIndexImage ++;
      this.currentIndexImage == this.imageArray.length ? this.currentIndexImage = 0 : '';
    }, 8000)
  }

}
