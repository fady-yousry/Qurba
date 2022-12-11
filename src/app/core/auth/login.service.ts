import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient, private router:Router) { }
  currentUserData : any=new BehaviorSubject(null);

  login(body: any) {
    return this.http.post('https://dummyjson.com/auth/login', body);
  }

  isLoggedIn() {
    if (localStorage.getItem("token")) {
      this.currentUserData.next(localStorage.getItem("user_data"));
      return true;
    }
    return false;
  }
  
}
