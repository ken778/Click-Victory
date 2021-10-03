import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveriespage',
  templateUrl: './deliveriespage.component.html',
  styleUrls: ['./deliveriespage.component.scss'],
})
export class DeliveriespageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  fundspage(){
    this.router.navigate(['/fundspage'])
  }

}
