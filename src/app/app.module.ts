import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsModule } from './shared/products/products/products.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { PassDashboardComponent } from './shared/passengers/pass-dashboard/pass-dashboard.component';
import { PassCountComponent } from './shared/passengers/pass-count/pass-count.component';
import { PassCardComponent } from './shared/passengers/pass-card/pass-card.component';
import { PassengerModule } from './shared/passengers/passenger/passenger.module';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PassengerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
