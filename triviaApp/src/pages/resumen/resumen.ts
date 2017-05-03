import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Jugador } from "../../entity/jugador";

/**
 * Generated class for the Resumen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-resumen',
  templateUrl: 'resumen.html',
})
export class Resumen implements OnInit {

  player: Jugador;
  mensaje: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Resumen');
  }

  ngOnInit(){
    this.player = this.navParams.get("jugador");
    
    this.populateMensaje();
  }

  exit(){
    this.navCtrl.popToRoot();
  }

  populateMensaje(){
    if(this.player.getWins()==3){
      this.mensaje = "Sos un crack!";
    } else if(this.player.getWins()==2) {
      this.mensaje = "No estuvo para nada mal";
    } else if (this.player.getWins()==1) {
      this.mensaje = "Mala suerte";
    } else {
      this.mensaje = "Programar te está haciendo mal";
    }
  }
}
