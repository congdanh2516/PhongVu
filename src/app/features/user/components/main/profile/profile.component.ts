import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../services/user-info/user-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private user_sv: UserInfoService) { }

  ngOnInit(): void {
    this.user_sv.getProfile().subscribe();
    this.user_sv.getAddress().subscribe();
  }

}
