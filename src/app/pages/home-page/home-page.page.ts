import { Component, OnInit } from '@angular/core';
// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  dateMulti: string[];
  type: 'string';
  task: any;
  constructor(
    private router: Router,
    public _route: ActivatedRoute,
    private _data: AuthService,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this._data.LogedUser().subscribe((res) => {
      res.uid;

      this.afs
        .collection('tasks', (ref) => ref.where('userID', '==', res.uid))
        .valueChanges()
        .subscribe((dat) => {
          console.log(dat);
          this.task = dat;
        });
    });
  }

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
  };
  //redirect to add task page
  addTask() {
    this.router.navigate(['/add-task-page']);
  }
  logout() {
    this._data.logout();
  }
}
