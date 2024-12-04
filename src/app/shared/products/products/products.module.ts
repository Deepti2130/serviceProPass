import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdDashboardComponent } from '../prod-dashboard/prod-dashboard.component';
import { ProdCardComponent } from '../prod-card/prod-card.component';
import { ProdFormComponent } from '../prod-form/prod-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material/material.module';



@NgModule({
  declarations: [
    ProdDashboardComponent,
    ProdCardComponent,
    ProdFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule

  ],
  exports:[ProdDashboardComponent]

})
export class ProductsModule { }
