import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config';

const httpOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory () : Observable<Category[]> {
    let api = Config.url + "/categories?page=1&limit=10&search&sort[name]=asc"
    return this.http.get<Category[]>(api, httpOptions);
  }

}
