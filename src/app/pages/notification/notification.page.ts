import { Component, OnInit } from '@angular/core';
import {Device,LocalNotification,LocalNotificationActionPerformed,LocalNotificationEnabledResult,LocalNotifications,Plugins} from '@capacitor/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  async ngOnInit() {
    await LocalNotifications.requestPermission()
  }
  async scheduleBasic(){
    await LocalNotifications.schedule({
      notifications:[
       {
        title: "Friendly Reminder",
        body:"You have task to attend to",
        id: 1,
        extra:{
          data: "pass data to your handler"
        },
        iconColor:"#0000FF"
       }

      ]
    })

  }
  async scheduleAdvanced(){

  }

}
