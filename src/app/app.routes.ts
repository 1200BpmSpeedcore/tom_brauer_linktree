import { Routes } from '@angular/router';

import { HomePage } from './forms/home-page/home-page';
import { Portfolio } from './forms/portfolio/portfolio';
import { Disclosure } from './forms/imprint/disclosure/disclosure';


export const routes: Routes = [
  // Header
  {path: '', component: HomePage},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'portfolio', component: Portfolio},

  // Imprint
  {path: 'imprint', component: Disclosure},
  {path: 'legal', redirectTo: 'imprint', pathMatch: 'full'},
  {path: 'legal-disclosure', redirectTo: 'imprint', pathMatch: 'full'},
  {path: 'disclosure', redirectTo: 'imprint', pathMatch: 'full'},
];
