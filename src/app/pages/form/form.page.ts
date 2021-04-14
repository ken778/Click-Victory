import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor( private auth: AuthService,
    private _afa: AngularFirestore,
    private router: Router,
    private toastr: ToastController) { }

  ngOnInit() {
  }

  application(ApplicationData:NgForm){
    let date = new Date()
    let DateCreated = date;
    let createdAt = date.getTime();

    this.auth.LogedUser().subscribe((res) => {
      const applicationsData: any = {
        'userID': res.uid,
        'companyName': ApplicationData.value.companyName,
        'jobTitle': ApplicationData.value.jobTitle,
        'createdAt': DateCreated,
        'timeCreated':createdAt
      }; //end of data

      //add task
      this._afa
        .collection('applications')
        .add(applicationsData)
        .then(() => {
          this.toast('application successfuly saved', 'success');
          this.router.navigate(['/home/applications']);
        })
        .catch((err) => {
          this.toast('something is wrong', 'danger');
        });
    });
    
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

  home(){
    this.router.navigate(['/home/applications'])
  }

}
