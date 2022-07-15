import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/service/loader/loader.service';
import { LocalStorageService } from './core/service/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FinalPractise';
  constructor(private storage_sv: LocalStorageService) {}
  ngOnInit(): void {
    this.storage_sv.removeItem('productsAreChooesed');
  }
  
}
