import { Injectable } from '@angular/core';
import { Iproduct, productstatus } from '../model/product';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    productArr:Array<Iproduct> = [
  {
    pname:"Iphone 15",
    pdetails:'48MP Main: 26 mm, ƒ/1.6 aperture, sensorshift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)',
    pId:"123",
    pstatus:productstatus.Inprogress
  },
  {
    pname:"Iphone 16 pro",
    pdetails:'48MP Main: 26 mm, ƒ/1.6 aperture, sensorshift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)',
    pId:"124",
    pstatus:productstatus.Dispatched
  },
  {
    pname:"Iphone 13",
    pdetails:'48MP Main: 26 mm, ƒ/1.6 aperture, sensorshift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)',
    pId:"125",
    pstatus:productstatus.Delivered
  }
]
  constructor(
    private _snakBar:SnackBarService
  ) { }

  //API call to get all product Data from DB

  fetchAllproduct():Array<Iproduct>{

    return this.productArr
  }


  //API call for update status of product
  updatestatus(updatestatus:productstatus, pId:string){
    let getIndex = this.productArr.findIndex(prod => prod.pId === pId)

    this.productArr[getIndex].pstatus = updatestatus

    this._snakBar.opensnackBar(`The product status is updated as ${updatestatus} `)
  }

  //API call to create product

  createproduct(prodobj:Iproduct){
    this.productArr.push(prodobj)

   this._snakBar.opensnackBar(`The new product ${prodobj.pname} is added successfully!!!`)
  }
}
