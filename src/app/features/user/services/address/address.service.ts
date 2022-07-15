import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/app/config';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json',})
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private auth_sv: AuthenticationService) { }

  getAddress () {
    let api = 'https://provinces.open-api.vn/api/'
    return this.http.get(api, httpOptions);
  }

  addNewAddress(newAddress: any) {
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'application/json')
    let api = Config.url + "/users/me/addresses";
    return this.http.post(api, newAddress, {headers: header})
  }

  getAddressById(addressId: string) : Observable<any>{
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'Application/json');
    let api = Config.url + `/users/me/addresses/${addressId}`;
    return this.http.get(api, {headers: header});
  }

  modifyAddress (address: any) {
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'Application/json');
    let api = Config.url + `/users/me/addresses/${address.id}`;
    return this.http.put(api, address, {headers: header});
  }

  deleteAddress (addressId: string) {
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'Application/json');
    let api = Config.url + `/users/me/addresses/${addressId}`;
    return this.http.delete(api, {headers: header});
  }
}
