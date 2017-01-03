import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { GoogleChartsComponent } from './google-charts';

export const appRoutes: Routes = [
  // #/ -> #/home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // #/home
  { path: 'home', component: HomeComponent },
  // #/about
  { path: 'about', component: AboutComponent },
  // #/google-charts
  { path: 'google-charts', component: GoogleChartsComponent },
  // #/xyz -> #/home
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
