import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor( public popoverController: PopoverController,private router: Router) { }

  ngOnInit() {}
  close(){
    this.popoverController.dismiss();
  }
  toAbout(){
    this.router.navigate(['/about']).then(()=>{
      this.popoverController.dismiss();
    })
  }
  toNotification(){
    this.router.navigate(['/notification'])
  }

}
