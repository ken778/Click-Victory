import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.page.html',
  styleUrls: ['./detailed.page.scss'],
})
export class DetailedPage implements OnInit {
  taskName:any;
  task:any;
  constructor(private _route : ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
  
  }
   

      
    

}
