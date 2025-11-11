import { Routes } from '@angular/router';

import { HomePage } from './forms/home-page/home-page';
import { Portfolio } from './forms/portfolio/portfolio';


export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'portfolio', component: Portfolio}
];
