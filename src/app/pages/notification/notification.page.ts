import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  async ngOnInit() {
   
  }
 
  async scheduleAdvanced(){

  }

}
