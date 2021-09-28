import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {


  //variables to display
  details: any;
  photo : any;
  constructor(private auth : AuthService, private afs : AngularFirestore) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        //this.details = element;
        //console.log(res.uid);
      
      })
      this.afs.collection('personalDetails').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(res.uid);
       console.log(data)
       this.details=data;  
       
      }) 
      this.afs.collection('products', ref=> ref.where('userID','==',res.uid)).valueChanges().subscribe(dat=>{
          console.log(dat)
          this.photo = dat;
      })
       
      }) 
 
       
    


    
  }

}
