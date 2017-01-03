import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NavigationComponent } from './navigation';
import { GoogleChartsComponent } from './google-charts';
import { ChartjsComponent } from './chartjs';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    GoogleChartsComponent,
    ChartjsComponent
  ],
  imports: [
    routing,
    HttpModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot()
  ]
})
export class AppModule { }
