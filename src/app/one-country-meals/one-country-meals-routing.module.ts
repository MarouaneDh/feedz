import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneCountryMealsPage } from './one-country-meals.page';

const routes: Routes = [
  {
    path: '',
    component: OneCountryMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneCountryMealsPageRoutingModule {}
