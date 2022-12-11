import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient, private router:Router) { }

  login(body: any) {
    return this.http.post('https://dummyjson.com/auth/login', body);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }
}
