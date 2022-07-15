import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Config } from 'src/app/config';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

const httpOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authToken: any;
  refreshToken: any;
  isAuthorize: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  login (account : any) : Observable<any> {
    let api = Config.url + "/auth/login";
    return this.http.post(api, account, httpOptions)
            .pipe(
              tap((data: any) =>  { //success
                console.log(data);
                this.storeTokenInLocal(data.data.accessToken, data.data.refreshToken);
                this.router.navigateByUrl('/cart');
              }), 
              catchError(this.handleError)  //failed
            )
  }
  
  getToken() {
    return localStorage.getItem('authToken');
  }

  loggedIn(){
    let token : any = this.getToken();
    return !helper.isTokenExpired(token);
  }

  logOut () {
      this.isAuthorize=false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      //location.reload();
      this.router.navigateByUrl('/home');
  }

  storeTokenInLocal(authToken: any, refreshToken: any){
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('refreshToken', refreshToken)
    this.authToken=authToken;
    console.log(this.authToken);
    this.refreshToken=refreshToken;
  }

  loadToken () {
    let token = localStorage.getItem('authToken');
    this.authToken = token;
  }

  signUp (user: any) {
    let api = Config.url + "/auth/register";
    return this.http.post(api, user, httpOptions);
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
