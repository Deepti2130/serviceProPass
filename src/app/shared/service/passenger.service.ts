import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passenger';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {


  passengersArr:Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ]
  constructor(
    private _snackBar:SnackBarService
  ) { }


  //API call to get all the passengers

  fetchAllpassenger():Array<Ipassenger>{
   return this.passengersArr
  }

  updatedpassinfo(updatedpass:Ipassenger){
  let getIndex = this.passengersArr.findIndex(pass=>pass.id === updatedpass.id)

  this.passengersArr[getIndex] = updatedpass

  this._snackBar.opensnackBar(`The passenger of ${updatedpass.fullname} is updated successfully`)
  }

  removePass(id:number){
    let getIndex = this.passengersArr.findIndex(pass=>pass.id === id)

    this.passengersArr.splice(getIndex,1)

    this._snackBar.opensnackBar(`The passenger of ID:${id} is removed successfully!!!`)
  }
}
