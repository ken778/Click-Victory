import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource,ImageOptions } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss'],
})
export class AddproductsComponent implements OnInit {
  base64:any;
  constructor(
    private auth: AuthService,
    private _afa: AngularFirestore,
    private router: Router,
    private toastr: ToastController,

  ) { }

  ngOnInit() {
    Camera.requestPermissions({permissions:['photos']})
  }

  pickImageFromGallery(){
    var options:ImageOptions={
      source:CameraSource.Photos,
      resultType:CameraResultType.DataUrl
    }
    Camera.getPhoto(options).then((result)=>{
      this.base64 = result.dataUrl;
    },(err)=>{
        console.log(err. message)
    })
  }

  //adding product
  addProduct(productData: NgForm){
    // this.pickImageFromGallery();
    this.auth.LogedUser().subscribe((res) => {
      const product: any = {
        userID: res.uid,
        price: productData.value.price,
        quality: productData.value.quality,
        productName: productData.value.productName,
        units: productData.value.units,
        description: productData.value.description,
        imgae: this.base64
       
      }; //end of data

      //add task
      this._afa
        .collection('products')
        .add(product)
        .then(() => {
          this.toast('product added', 'success');
          
    
        })
        .catch((err) => {
          this.toast('something is wrong', 'danger');
          console.log(err.message)
        });
    });
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000,
    });

    toast.present();
  } // end of toast

  backToHome(){
    this.router.navigate(['/home'])
  }

}
