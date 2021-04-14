import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  loginGoogle() {
    this.auth.Googlelogin();
  }
  LoginWithPassword() {
    this.router.navigate(['/sign-upn-wit-email']);
  }
  login() {
    this.router.navigate(['/sign-in']);
  }
} 
