import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HousingComponent,
    ForSaleComponent,
    ForSaleDetailComponent,
    HousingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
