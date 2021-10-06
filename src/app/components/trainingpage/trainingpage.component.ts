import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trainingpage',
  templateUrl: './trainingpage.component.html',
  styleUrls: ['./trainingpage.component.scss'],
})
export class TrainingpageComponent implements OnInit {
  status:string="";

  constructor(private alert: AlertController,private router: Router) { }

  ngOnInit() {}

  OpenConfirmDialogue(){
    this.alert.create({
      header:"Workshop Booked",
      subHeader:"Hydroponic Vegetable Production",
      message: "4&nbspdays &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R&nbsp550.00",
      buttons:[
        {text:"PURCHASE SEAT",
        handler:(data)=>{
          /*this.status = "Purchase confirmed!"*/
          console.log('Purchase confirmed');
        }
      },
      {
        text:"Cancel",
        handler:(data)=>{
          console.log('Purchase cancelled!');
        }
      }
      ]
    }).then((confirmElement)=>{
      confirmElement.present();
    })
  }

  trainingpayment(){
    this.router.navigate(['/trainingpayment'])
}

}
