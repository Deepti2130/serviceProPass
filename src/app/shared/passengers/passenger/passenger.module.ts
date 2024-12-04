import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDashboardComponent } from '../pass-dashboard/pass-dashboard.component';
import { MaterialModule } from '../../material/material/material.module';
import { FormsModule } from '@angular/forms';
import { PassCardComponent } from '../pass-card/pass-card.component';
import { PassCountComponent } from '../pass-count/pass-count.component';



@NgModule({
  declarations: [
    PassDashboardComponent,
  PassCardComponent,
PassCountComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    PassDashboardComponent
  ]
})
export class PassengerModule { }
