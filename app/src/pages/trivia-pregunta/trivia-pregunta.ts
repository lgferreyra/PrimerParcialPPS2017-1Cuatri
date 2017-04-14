import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Jugador } from "../../entity/jugador";
import { Preguntas } from "../../entity/preguntas";

/**
 * Generated class for the TriviaPregunta page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-trivia-pregunta',
  templateUrl: 'trivia-pregunta.html',
})
export class TriviaPreguntaPage implements OnInit {

  player : Jugador;
  preguntaNumero : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriviaPregunta');
  }

  ngOnInit(){
    this.player = this.navParams.get("jugador");
    this.preguntaNumero = this.navParams.get("pregunta");
  }
}
