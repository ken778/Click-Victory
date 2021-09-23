import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-additionalproducts',
  templateUrl: './additionalproducts.component.html',
  styleUrls: ['./additionalproducts.component.scss'],
})
export class AdditionalproductsComponent implements OnInit {

  productID:any;
  product:any;

  constructor(private _route : ActivatedRoute, public _data: ProductService) { }

  ngOnInit() {
    this.productID = this._route.snapshot.paramMap.get('ref');
    console.log(this.productID);

    //getting single job data
    this.product = this._data.getProductInfo(this.product).subscribe((i) => {
      this.product = i;
      console.log(this.product);
    });
  }

}
