import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { UuidService } from '../../service/uuid.service';
import { productstatus } from '../../model/product';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
@ViewChild('productForm') productForm! : NgForm
  constructor(
    private _productservice:ProductService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
  }

  onAddproduct(){
  if(this.productForm.valid){
    let prodobj = {
      ...this.productForm.value,
      pid:this._uuidservice.generateUuid(),
      pstatus:productstatus.Inprogress
    }
    this._productservice.createproduct(prodobj);
    this.productForm.reset()
  }
  }

}
