import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {
  passArr !: Array<Ipassenger>

  checkIncount!: number;


  constructor(
    private _passService: PassengerService
  ) { }

  ngOnInit(): void {
    debugger;
    this.passArr = this._passService.fetchAllpassenger()
    this.getcheckIncount();
  }

  getcheckIncount() {
    debugger;
    this.checkIncount = this.passArr.filter(pass => pass.checkedIn).length
  }

  OnRemoveupdate(eve: any) {
    this.getcheckIncount()
  }
}


