import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PptService } from "../../providers/ppt-service";
import { Jugador } from "../../entity/jugador";
import { PptPage } from "../ppt-page/ppt-page";

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lobby-page',
  templateUrl: 'lobby-page.html',
})
export class LobbyPage implements OnInit {

  jugador: Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pptSrv: PptService) {
  }

  ngOnInit(){
    if(this.jugador==null){
      this.jugador = this.pptSrv.getJugador();
    }
  }

  jugar(){
    this.navCtrl.push(PptPage, {jugador: this.jugador});
  }
}
