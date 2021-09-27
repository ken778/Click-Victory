import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegistrationViewModule } from 'src/app/modules/registration-view-module';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.page.html',
  styleUrls: ['./form-stepper.page.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormStepperPage implements OnInit {


  name: any;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,  private auth: AuthService,
    private _afa: AngularFirestore,
    private router: Router,
    private toastr: ToastController, private afauth: AngularFireAuth, public registerViewModule : RegistrationViewModule) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  //sign up
  personalDetails(detailsData: NgForm) {
    {
      //personal details
     this.name=  this.registerViewModule.name = detailsData.value.name;
     
      this.registerViewModule.surname = detailsData.value.surname;
      this.registerViewModule.idNumber = detailsData.value.IDnumber;
      this.registerViewModule.email = detailsData.value.email;

      //physical address
      this.registerViewModule.street = detailsData.value.StreetName;
      this.registerViewModule.suburb = detailsData.value.suburb;
      this.registerViewModule.city = detailsData.value.city;
      this.registerViewModule.postalCode = detailsData.value.postalCode;

      //company details
      this.registerViewModule.regNumber = detailsData.value.regNumber;
      this.registerViewModule.taxNumber = detailsData.value.taxNumber;
      this.registerViewModule.contactNumber= detailsData.value.contactNumber;
      this.registerViewModule.companyEmail = detailsData.value.Companyemail;

      //comapny address
      this.registerViewModule.street = detailsData.value.street;
      this.registerViewModule.companySuburb = detailsData.value.companysuburb;
      this.registerViewModule.companyProvince= detailsData.value.companyCity;
      this.registerViewModule.comapanyPostalCode = detailsData.value.companyPostalCode;

      //banking details
      this.registerViewModule.bankName = detailsData.value.bankName;
      this.registerViewModule.branchName = detailsData.value.branch;
      this.registerViewModule.accountHolder= detailsData.value.holderName;
      this.registerViewModule.accountType = detailsData.value.accountType;

      this.registerViewModule;


      this.afauth.createUserWithEmailAndPassword(detailsData.value.email, String(detailsData.value.password)).then((data) => {
        localStorage.setItem('key', data.user.uid);
        data.user.sendEmailVerification()
        if (data.user.sendEmailVerification()) {
          this._afa.collection('personalDetails').doc(data.user.uid).set({
          


         
            name: detailsData.value.name,
            surname: detailsData.value.surname,
            idNo: detailsData.value.IDnumber,
            email: detailsData.value.email,
            

            //physical address details
            StreetName: detailsData.value.StreetName,
            suburb: detailsData.value.suburb,
            city: detailsData.value.city,
            postalCode: detailsData.value.postalCode,

            //company details
            regNumber: detailsData.value.regNumber,
            taxNumber: detailsData.value.taxNumber,
            contactNumber: detailsData.value.contactNumber,
            companyemail: detailsData.value.companyemail,

            //company address
            street: detailsData.value.street,
            companysuburb: detailsData.value.companysuburb,
            companyCity: detailsData.value.companyCity,
            companyProvince: detailsData.value.companyProvince,
            companyPostalCode: detailsData.value.companyPostalCode,

            //banking details
            bankName: detailsData.value.bankName,
            accountType: detailsData.value.accountType,
            holderName: detailsData.value.holderName,
            branch: detailsData.value.branch,

          }).then((y) => {
            console.log('successfully registered')
          })

        } else {

        }

      }).catch((error) => {

        this.toast(error.message, 'danger');
      })
    }
  }//end of register


  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    })
    toast.present()
  }//end of toast


 

}
