import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string;
  password: string;
  role: string;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private authent: AngularFireAuth,
    private auth: AuthService,
    private toastr: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  register() {
    this.router.navigate(['/sign-upn-wit-email']);
  } // end og register

  forgot() {
    this.router.navigate(['/forgot-password']);
  } //end of forgot password

  async login() {
    if (this.email && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'Please wait..',
        spinner: 'crescent',
        showBackdrop: true,
      });
      loading.present();
      this.auth
        .login(this.email, this.password)
        .then(() => {
          this.router.navigate(['/home-page']);
          loading.dismiss();
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        });
    } else {
      this.toast('Please enter your email and password', 'danger');
    }
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      cssClass: 'custom',
      position: 'top',
      color: status,
      duration: 2000,
    });
    toast.present();
  }
}
