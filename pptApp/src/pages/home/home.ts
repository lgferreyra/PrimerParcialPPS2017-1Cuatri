import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { LobbyPage } from "../lobby-page/lobby-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  ionViewDidLoad(){
    this.menuCtrl.enable(false);
  }

  registrar(){
    this.menuCtrl.enable(true);
    this.navCtrl.setRoot(LobbyPage);
    console.info(this.navCtrl.getViews());
  }
}
