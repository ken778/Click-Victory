import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.page.html',
  styleUrls: ['./add-task-page.page.scss'],
})
export class AddTaskPagePage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = [
    's\u00f8n',
    'man',
    'tir',
    'ons',
    'tor',
    'fre',
    'l\u00f8r',
  ];
  customPickerOptions: any;
  constructor(
    private auth: AuthService,
    private _afa: AngularFirestore,
    private router: Router,
    private toastr: ToastController
  ) {
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Save',
          handler: () => console.log('Clicked Save!'),
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          },
        },
      ],
    };
  }

  task(TaskData: NgForm) {
    this.auth.LogedUser().subscribe((res) => {
      const taskData: any = {
        userID: res.uid,
        taskName: TaskData.value.name,
        startTime: TaskData.value.fromTime,
        endTime: TaskData.value.toTime,
        priority: TaskData.value.priority,
        type: TaskData.value.type,
        note: TaskData.value.note,
      }; //end of data

      //add task
      this._afa
        .collection('tasks')
        .add(taskData)
        .then(() => {
          this.toast('task added', 'success');
          this.router.navigate(['/home-page']);
        })
        .catch((err) => {
          this.toast('something is wrong', 'danger');
        });
    });
  }

  ngOnInit() {}
  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000,
    });
    toast.present();
  } //end of toast
  home() {
    this.router.navigate(['/home-page']);
  }
}
