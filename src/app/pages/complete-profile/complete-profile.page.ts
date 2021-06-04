import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit {

  details:any;
  id:any;
  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        //this.details = element;
        //console.log(res.uid);
      
      })
      this.database.collection('users').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(data);
        this.details=data;
      })

       
    }) 
  }
    
  Update(UpdateData:NgForm){
    this.auth.LogedUser().subscribe(res=>{
      res.uid;
      this.id = res.uid;
      this.auth.UpdateStudentInfo(this.id,UpdateData.value);
    })
  }
  toSign(){
    this.router.navigate(['/home/profile'])
  }
}
