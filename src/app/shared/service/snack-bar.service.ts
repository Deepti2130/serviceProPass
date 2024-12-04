import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snakbar:MatSnackBar
  ) { }


  opensnackBar(msg:string){
   this._snakbar.open(msg,"close",{
    horizontalPosition:'left',
    verticalPosition:'bottom',
    duration:2500
   })
  }
}
