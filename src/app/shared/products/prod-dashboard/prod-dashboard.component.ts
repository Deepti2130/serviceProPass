import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {
//we need a property to store the data

prodArr! : Array<Iproduct>
  constructor(
    private _productservice:ProductService
  ) { }

  ngOnInit(): void {
// to call the serice for to get all data
   this.prodArr = this._productservice.fetchAllproduct()
  }





}
