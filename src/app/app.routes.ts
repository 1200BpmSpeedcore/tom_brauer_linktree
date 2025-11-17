import { Routes } from '@angular/router';

import { HomePage } from './forms/home-page/home-page';
import { Portfolio } from './forms/portfolio/portfolio';

import { Disclosure } from './forms/imprint/disclosure/disclosure';
import { Impressum } from './forms/imprint/impressum/impressum';

import { PrivacyPolicy } from './forms/privacy/privacy-policy/privacy-policy';
import { Datenschutzerklaerung } from './forms/privacy/datenschutzerklaerung/datenschutzerklaerung';


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

  // Impressum
  {path: 'impressum', component: Impressum},

  // Privacy Policy
  {path: 'privacy', component: PrivacyPolicy},
  {path: 'privacy-policy', redirectTo: 'privacy', pathMatch: 'full'},
  {path: 'data-protection', redirectTo: 'privacy', pathMatch: 'full'},

  // Datenschutz
  {path: 'datenschutz', component: Datenschutzerklaerung},
  {path: 'datenschutzerklaerung', redirectTo: 'datenschutz', pathMatch: 'full'}
];
