import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: any;
  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}
  reset() {}
  back() {
    this.router.navigate(['/sign-in']);
  }
  async resetPassword() {
    if (this.email) {
      const loading = await this.loadingCtrl.create({
        message: 'Please wait..',
        spinner: 'crescent',
        showBackdrop: true,
      });
      loading.present();
      this.afauth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          loading.dismiss();
          this.toast('Please check your email', 'success');
          this.router.navigate(['/sign-in']);
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'dander');
        });
    } else {
      this.toast('Please enter your email', 'danger');
    }
  } //end of reset password

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000,
    });
    toast.present();
  }
}
