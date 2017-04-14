import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TriviaPreguntaPage } from '../trivia-pregunta/trivia-pregunta';
import { Jugador } from '../../entity/jugador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

nombre : string;

  constructor(public navCtrl: NavController) {

  }

  jugar(){
    console.log(this.nombre);
    let player: Jugador = new Jugador(this.nombre);
    this.navCtrl.push(TriviaPreguntaPage, {jugador: player, pregunta: 1});
  }
}
