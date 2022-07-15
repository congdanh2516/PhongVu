import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;
  confirmPassword_var: string = '';
  checkErrorConfirmPassword: boolean = false;
  isLoading: boolean = false;

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  constructor(private fb: FormBuilder, private auth_sv: AuthenticationService, private router: Router) {
    this.userForm = this.fb.group({
      // userInfo : this.fb.group({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        phone: '',
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      // })
    })  
  }

  ngOnInit(): void {
  }

  createNewAccount () {
    console.log(this.userForm.value);
    if(!this.checkErrorConfirmPassword) {
      this.isLoading = true;
      this.userForm.value.phone = this.userForm.value.phone.number;
      this.auth_sv.signUp(this.userForm.value).subscribe(
        {
          next: () => {
            this.isLoading = false;
            alert("Sign up successfully");
            this.router.navigateByUrl("/login");
          },
          error: () => {
            this.isLoading = false;
            alert("Failed")
          }
        }
      )
    }
  }

  confirmPassword() {
    this.checkErrorConfirmPassword = false;
    console.log(this.confirmPassword_var, this.userForm.value.password);
    if(this.confirmPassword_var != '' && this.userForm.value.password != this.confirmPassword_var) {
      this.checkErrorConfirmPassword = true;
    }
  }
  clearError(){
    console.log("cle");
    this.checkErrorConfirmPassword = false;
  }
}
