import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss'],
})
export class ProductspageComponent implements OnInit {

  count: any;
  image:any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs
    .collection('products').snapshotChanges().subscribe((dat)=>{
      console.log(dat)
      this.image = dat;
      this.count = dat.length;
      console.log(this.count)
    })
  }

}
