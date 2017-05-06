import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { PptService } from "../providers/ppt-service";

import { ScorePipe } from "../pipes/score-pipe";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LobbyPage } from "../pages/lobby-page/lobby-page";
import { PptPage } from "../pages/ppt-page/ppt-page";
import { AboutPage } from "../pages/about/about";
import { Scoreboard } from "../pages/scoreboard/scoreboard";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from "@ionic-native/vibration";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LobbyPage,
    PptPage,
    AboutPage,
    Scoreboard,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LobbyPage,
    PptPage,
    AboutPage,
    Scoreboard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    PptService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
