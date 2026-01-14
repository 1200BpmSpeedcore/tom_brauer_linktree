import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { AboutMe } from './pages/about-me/about-me';

import { Disclosure } from './pages/imprint/disclosure/disclosure';
import { Impressum } from './pages/imprint/impressum/impressum';

import { PrivacyPolicy } from './pages/privacy/privacy-policy/privacy-policy';
import { Datenschutzerklaerung } from './pages/privacy/datenschutzerklaerung/datenschutzerklaerung';


export const routes: Routes = [
  // Header
  {path: '', component: HomePage},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'portfolio', component: Portfolio},
  {path: 'aboutme', component: AboutMe},

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
