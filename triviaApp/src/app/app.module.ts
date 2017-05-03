import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TriviaPreguntaPage } from "../pages/trivia-pregunta/trivia-pregunta";
import { Resumen } from "../pages/resumen/resumen";
import { Scoreboard } from "../pages/scoreboard/scoreboard";

import { TriviaService } from "../providers/triviaService";

import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from "@ionic-native/vibration";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    TriviaPreguntaPage,
    Resumen,
    Scoreboard
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    TriviaPreguntaPage,
    Resumen,
    Scoreboard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    TriviaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
