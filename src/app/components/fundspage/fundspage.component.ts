import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundspage',
  templateUrl: './fundspage.component.html',
  styleUrls: ['./fundspage.component.scss'],
})
export class FundspageComponent implements OnInit {

  public value : any = ''



  constructor(private router: Router) { }


  changeValue(_value) {
    this.value = _value

    console.log('i am selected value ', this.value)
  }
 


  ngOnInit() {
    this.value = 'incoming'
 
  }

  deliveries(){
      this.router.navigate(['/home/deliveriespage'])
  }

}
