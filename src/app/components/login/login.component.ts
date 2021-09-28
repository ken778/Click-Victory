import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 
   email : string;
   password : string;
  constructor(private router: Router,private authServ : AuthService) { }

  ngOnInit() {}

  landingPage(){
      this.router.navigate(['/landingpage'])
  }
  login(){
    this.authServ.login(this.email,this.password)
  }

}
