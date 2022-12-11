import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:any;
  userData: any;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let body ={
      username:this.email,
      password:this.password
    }
    this.loginService.login(body).subscribe(res=>{
      this.userData=res;
      localStorage.setItem("token",this.userData.token);
      localStorage.setItem("user_data",JSON.stringify(this.userData));
      if(res){
        this.router.navigate(['']);
      }
    })

  }

}
