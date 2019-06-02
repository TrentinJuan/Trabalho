import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP } from '@ionic-native/http/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { api } from './services/api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' 
//import { formatResponse } from './pages/home/funcao';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],


providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    SQLite,
    api,
    ReactiveFormsModule,
    FormsModule,
    //formatResponse,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
