import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  account : {username: string, password: string} = {username: '', password: ''};
  hiddenPassword : boolean = true;
  showPassword : boolean = false;
  isLoading: boolean = false;
  errorString: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  login () {
    if(this.account.username == '' || this.account.password == '') {
      if(this.account.username == '' && this.account.password != ''){
        this.errorString = 'User name is required';
      }
      else {
        if(this.account.password == '' && this.account.username != '') {
          this.errorString = "Password is required";
        }
        else {
          this.errorString = " User name and password are required";
        }
      }
    }
    else {
      this.isLoading = true;
      this.auth.login(this.account).subscribe(
        {
          next: (data: any) => {
            this.isLoading = false;
          },
          error: () => {
            window.location.reload();
          }
        }
      )
    }
  }

  clearError(){
    this.errorString = '';
  }

}
