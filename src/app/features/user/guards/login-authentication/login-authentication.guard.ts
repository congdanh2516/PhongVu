import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationGuard implements CanActivate {
  
  constructor(private auth: AuthenticationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.loggedIn()) {
      console.log("loggedIn: ", this.auth.loggedIn());
      return true;
    }
    else {
      console.log("loggedIn false: ", this.auth.loggedIn());
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  
}
