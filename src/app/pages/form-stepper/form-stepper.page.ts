import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.page.html',
  styleUrls: ['./form-stepper.page.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormStepperPage implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,  private auth: AuthService,
    private _afa: AngularFirestore,
    private router: Router,
    private toastr: ToastController, private afauth: AngularFireAuth) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  //sign up
  personalDetails(detailsData: NgForm){
    {
      this.afauth.createUserWithEmailAndPassword(detailsData.value.email,String(detailsData.value.password)).then((data)=>{
        localStorage.setItem('key',data.user.uid);
        data.user.sendEmailVerification()
        if(data.user.sendEmailVerification()){
          this._afa.collection('personalDetails').doc(data.user.uid).set({
            userId : data.user.uid,
            name: detailsData.value.name, 
            surname: detailsData.value.surname,
            idNo: detailsData.value.IDnumber,
            email: detailsData.value.email,
          }).then((y)=>{
            console.log('successfully registered')
          })
         
        }else{

        }
      
      }).catch((error)=>{
       
        this.toast(error.message, 'danger');
      })
    }
  }//end of register

  // //recording personal details
  // personalDetails(detailsData: NgForm){
  //   this.auth.LogedUser().subscribe((res) => {
  //     const personalData: any = {
  //       userID: res.uid,
  //       name: detailsData.value.name,
  //       surname: detailsData.value.surname,
  //       idNo: detailsData.value.IDnumber,
  //       email: detailsData.value.email,
      
  //     }; //end of data

  //     //add personal details
  //     this._afa
  //       .collection('personalDetails')
  //       .add(personalData)
  //       .then(() => {
  //         console.log('added')
          
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   });

  // }

  //physical address form
  physicalAddress(physicalAdressData: NgForm) {
    this.auth.LogedUser().subscribe((res) => {
      const physicalAddressData: any = {
        userID: res.uid,
        StreetName: physicalAdressData.value.StreetName,
        suburb: physicalAdressData.value.suburb,
        city: physicalAdressData.value.city,
        postalCode: physicalAdressData.value.postalCode,

      }; //end of data
      

      //add data
      this._afa
        .collection('physicalAddress')
        .add(physicalAddressData)
        .then(() => {
          console.log('added')

        })
        .catch((err) => {
          console.log(err.message);
        });
    });

  }

  //company details
  companyDetails(companyData: NgForm){
    this.auth.LogedUser().subscribe((res) => {
      const companyDetails: any = {
        userID: res.uid,
        regNumber: companyData.value.regNumber,
        taxNumber: companyData.value.taxNumber,
        contactNumber: companyData.value.contactNumber,
        email: companyData.value.email,

      }; //end of data

      //add data
      this._afa
        .collection('companyDetails')
        .add(companyDetails)
        .then(() => {
          console.log('added')

        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }

  //adding company address
  companyAddress(companyAdressData:NgForm){
    this.auth.LogedUser().subscribe((res) => {
      const companyAddress: any = {
        userID: res.uid,
        street: companyAdressData.value.street,
        suburb: companyAdressData.value.suburb,
        city: companyAdressData.value.city,
        province: companyAdressData.value.province,
        postalCode: companyAdressData.value.postalCode,

      }; //end of data

      //add data
      this._afa
        .collection('companyAddress')
        .add(companyAddress)
        .then(() => {
          console.log('added')

        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }
  //adding banking details
  bankingDetails(bankData : NgForm){
    this.auth.LogedUser().subscribe((res) => {
      const bankingDetails: any = {
        userID: res.uid,
        bankName: bankData.value.bankName,
        accountType: bankData.value.accountType,
        holderName: bankData.value.holderName,
        branch: bankData.value.branch,

      }; //end of data

      //add data
      this._afa
        .collection('bakingDetails')
        .add(bankingDetails)
        .then(() => {
          console.log('added')

        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }

  //adding security details
 

   async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    })
    toast.present()
  }//end of toast

}
