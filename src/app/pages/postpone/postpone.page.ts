import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postpone',
  templateUrl: './postpone.page.html',
  styleUrls: ['./postpone.page.scss'],
})
export class PostponePage implements OnInit {

  taskID:any;
  task:any;
  constructor(private _route : ActivatedRoute,private  database: AngularFirestore, private auth : AuthService,private router:Router, private toastr: ToastController) { }

  ngOnInit() {
    this.taskID = this._route.snapshot.paramMap.get('ref');
    console.log(this.taskID);

    //getting single task data
    this.task = this.auth.getJobInfo(this.taskID).subscribe((i) => {
      this.task = i;
      console.log(this.task);
    });

  }
  tasks(TaskData:NgForm){
    this.taskID = this._route.snapshot.paramMap.get('ref');
    this.auth.postponeTask(this.taskID, TaskData.value);
  }

}
