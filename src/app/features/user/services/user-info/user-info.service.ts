import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Config } from 'src/app/config';
import { User } from '../../models/user.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient, private auth_sv: AuthenticationService) { }

  getProfile () : Observable<any> {
    this.auth_sv.loadToken();
    console.log(this.auth_sv.authToken);
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'Application/json');
    let api = Config.url + "/users/me/profile";
    return this.http.get<User>(api, {headers : header})
          .pipe(
            tap((data: any) =>  { //success
              console.log(data);
            }), 
            catchError(this.handleError)  //failed
          )
  }

  getAddress () : Observable<any> {
    this.auth_sv.loadToken();
    console.log(this.auth_sv.authToken);
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'Application/json');
    let api = Config.url + "/users/me/addresses";
    return this.http.get<User>(api, {headers : header})
          .pipe(
            tap((data: any) =>  { //success
              console.log('Address', data);
            }), 
            catchError(this.handleError)  //failed
          )
  }

  getAddressById(addressId: string) : Observable<any>{
    this.auth_sv.loadToken();
    let header = new HttpHeaders()
      .set('Authorization' , `Bearer ${this.auth_sv.authToken}`)
      .set('Content-Type' , 'Application/json');
    let api = Config.url + `/users/me/addresses/${addressId}`;
    return this.http.get(api, {headers: header});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
 
}
