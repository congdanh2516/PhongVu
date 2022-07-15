import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/features/user/services/authentication/authentication.service';
import { UserInfoService } from '../../../features/user/services/user-info/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  userName: string;
  constructor(public auth_sv: AuthenticationService, private user_sv: UserInfoService) { }

  ngOnInit(): void {
    if(this.auth_sv.loggedIn()) {
      this.user_sv.getProfile().subscribe((data: any) => {
        this.userName = data.data.lastName;
      })
    }
  }

  logout(){
    this.auth_sv.logOut();
  }

}
