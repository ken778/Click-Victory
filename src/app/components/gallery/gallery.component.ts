import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource,ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  base64: string = '';
  constructor() { }

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

}
