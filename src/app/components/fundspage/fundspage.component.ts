import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundspage',
  templateUrl: './fundspage.component.html',
  styleUrls: ['./fundspage.component.scss'],
})
export class FundspageComponent implements OnInit {

  public value : any = ''



  constructor() { }


  changeValue(_value) {
    this.value = _value

    console.log('i am selected value ', this.value)
  }
 


  ngOnInit() {
    this.value = 'incoming'
 
  }

}
