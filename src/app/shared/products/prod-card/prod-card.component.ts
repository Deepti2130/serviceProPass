import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, productstatus } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
@Input() productobj! : Iproduct

productstatus = productstatus
  constructor(
    private _productservice : ProductService
  ) { }

  ngOnInit(): void {
  }

  onstatuschange(updatedstat:productstatus){
  this.productobj.pstatus = updatedstat

  this._productservice.updatestatus(updatedstat,this.productobj.pId)
  }



}
