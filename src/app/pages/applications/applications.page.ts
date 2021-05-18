import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  total = 0;
  application:any;
  constructor(private router:Router,
    public _route: ActivatedRoute,
    private _data: AuthService,
    private afs: AngularFirestore ) { }

  ngOnInit() {
    this._data.LogedUser().subscribe((res) => {
      res.uid;

      this.afs
        .collection('applications', (ref) => ref.where('userID', '==', res.uid))
        .valueChanges()
        .subscribe((dat) => {
          console.log(dat);
          this.application = dat;
          console.log(dat.length)
          this.total = dat.length;
        });
    });
  }

  toForm(){
    this.router.navigate(['/form'])
  }

}
 