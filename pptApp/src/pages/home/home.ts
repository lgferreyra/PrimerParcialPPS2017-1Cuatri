import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { LobbyPage } from "../lobby-page/lobby-page";
import { Jugador } from "../../entity/jugador";
import { PptService } from "../../providers/ppt-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre: string;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public pptSrv: PptService) {

  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
    this.nombre = "";
  }

  registrar(){
    this.menuCtrl.enable(true);
    this.pptSrv.setJugador(new Jugador(this.nombre));
    this.navCtrl.push(LobbyPage);
  }
}
