import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {


   //form variables
   email: string;
   password : string;
  constructor(private router : Router,private auth: AuthService, private toastr : ToastController, private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

    //signin
    async login(){
      if(this.email && this.password){
        const loading = await this.loadingCtrl.create({
          message: 'Please wait..',
          spinner: 'crescent',
          showBackdrop: true
        })
       
        this.auth.login(this.email, this.password);
        // .then(()=>{
        
        //    loading.dismiss();
        //    this.router.navigate(['/home']);
        
        // }).catch((error)=>{
        //   loading.dismiss();
        //   this.toast(error.message, 'danger');
        // })
      }else{
        this.toast("Please enter your email and password", 'danger');
      }
    }//end of signin

  //toast
  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      cssClass: 'custom',
      position: 'top',
      color: status,
      duration: 3000
    })   
    toast.present();  
 
  }
  //to sign up page 

  landingPage(){
    this.router.navigate(['/landingpage'])
  }

}
