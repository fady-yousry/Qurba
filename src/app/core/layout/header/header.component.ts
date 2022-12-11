import { LoginService } from './../../auth/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService) {
    this.loginService.currentUserData.subscribe(() => {
      if (this.loginService.currentUserData._value) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    }
    )
  }

  ngOnInit(): void {
  }



}
