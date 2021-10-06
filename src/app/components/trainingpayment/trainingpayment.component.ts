import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trainingpayment',
  templateUrl: './trainingpayment.component.html',
  styleUrls: ['./trainingpayment.component.scss'],
})
export class TrainingpaymentComponent implements OnInit {
  condition: string="";

  constructor( private alert: AlertController, private router: Router) { }

  ngOnInit() {}

  OpenConfirmDialogue(){
    this.alert.create({
      header:"Payment Successful",
      subHeader:"Thank you for booking your training workshop",
      message: "4&nbspdays &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R&nbsp550.00",
      buttons:[
        {text:"CLOSE",
        handler:(data)=>{
          /*this.status = "Purchase confirmed!"*/
          console.log('Payment Successful');
        }
      },
      {
        text:"Cancel",
        handler:(data)=>{
          console.log('Payment cancelled!');
        }
      }
      ]
    }).then((confirmElement)=>{
      confirmElement.present();
    })
  }


  trainingpage(){
    this.router.navigate(['//home/trainingpage'])
  }

 

}


