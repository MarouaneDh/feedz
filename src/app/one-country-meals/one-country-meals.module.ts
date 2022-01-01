import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneCountryMealsPageRoutingModule } from './one-country-meals-routing.module';
import { OneCountryMealsPage } from './one-country-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneCountryMealsPageRoutingModule
  ],
  declarations: [OneCountryMealsPage]
})
export class OneCountryMealsPageModule {}
