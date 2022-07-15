import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config';

const httpOption = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProductList () : Observable<any> {
    let api = Config.url + "/products?page=1&limit=10&search=&sort[createdAt]=asc";
    return this.http.get<Product[]>(api, httpOption);
  }

  getProductById (id: string) : Observable<any>  {
    let api = Config.url + `/products/${id}`;
    return this.http.get<Product>(api, httpOption);
  }
}
