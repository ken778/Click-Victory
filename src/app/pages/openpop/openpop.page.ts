import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openpop',
  templateUrl: './openpop.page.html',
  styleUrls: ['./openpop.page.scss'],
})
export class OpenpopPage implements OnInit {

  constructor(private router:Router,public popoverController: PopoverController) { }

  ngOnInit() {
  }
  toAbout(){
    this.router.navigate(['/about'])
      

  }
}
