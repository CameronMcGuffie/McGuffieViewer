import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './main/main.component';
import { NewsComponent } from './page-modules/news/news.component';
import { BomComponent } from './page-modules/bom/bom.component';
import { WeatherComponent } from './page-modules/weather/weather.component';

const APP_COMPONENTS: any[] = [
  AppComponent,
  NewsComponent,
  BomComponent,
  WeatherComponent
];

@NgModule({
  declarations: [
    APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }