import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sign-upn-wit-email',
  templateUrl: './sign-upn-wit-email.page.html',
  styleUrls: ['./sign-upn-wit-email.page.scss'],
})
export class SignUpnWitEmailPage implements OnInit {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  surname: string;
  passwordMatch: boolean;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  async register() {
    if (this.email && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'loading..',
        spinner: 'crescent',
        showBackdrop: true,
      });
      loading.present();

      this.afauth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.afs.collection('users').doc(data.user.uid).set({
            userId: data.user.uid,
            name: '',
            surname: '',
            email: this.email,
          });
          data.user.sendEmailVerification();
        })
        .then(() => {
          loading.dismiss();
          this.toast('registration Success!', 'success');
          this.router.navigate(['/sign-in']);
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        });
    } else {
      this.toast('Please Fill The Form!', 'danger');
    }
  } //end of register

  //checking if passwords match
  checkPassword() {
    if (this.password == this.confirmPassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000,
    });
    toast.present();
  } //end of toast

  login() {
    this.router.navigate(['/sign-in']);
  }

  toSign(){
    this.router.navigate(['/sign'])
  }
}
