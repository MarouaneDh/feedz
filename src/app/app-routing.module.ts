import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./meal-details/meal-details.module').then( m => m.MealDetailsPageModule)
  },
  {
    path: 'tabs/tab2/country/:country',
    loadChildren: () => import('./one-country-meals/one-country-meals.module').then( m => m.OneCountryMealsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
