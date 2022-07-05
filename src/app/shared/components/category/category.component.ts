import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList : Array<Category> = [];
  itemName : string = '';
  hideDes : boolean = true;

  constructor(private category_sv: CategoryService) { }

  ngOnInit(): void {
    this.category_sv.getCategory().subscribe((data : any) => {
      this.categoryList = data.data;
      console.log(this.categoryList);
    })
  }

  showDes (value : any) {
    console.log(value);
    this.itemName = value;
    this.hideDes = false;
  }

  showDes2 () {
    
  }

}
