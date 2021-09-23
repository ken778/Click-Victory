import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public _fire: AngularFirestore, public route: Router) { }


    //get single product data
    getProductInfo(ref) {
      return this._fire.collection('products').doc(ref).valueChanges();
    }
}
