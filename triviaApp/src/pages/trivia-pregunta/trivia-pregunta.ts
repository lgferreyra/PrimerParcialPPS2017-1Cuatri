import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Jugador } from "../../entity/jugador";
import { Pregunta } from "../../entity/pregunta";
import { Vibration } from "@ionic-native/vibration";

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
  respuesta : number;
  preguntaNumero : number;
  pregunta : Pregunta = new Pregunta();

  constructor(public navCtrl: NavController, public navParams: NavParams, public vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriviaPregunta');
  }

  ngOnInit(){
    
    this.player = this.navParams.get("jugador");
    this.preguntaNumero = this.navParams.get("pregunta");
    
    //Elijo la pregunta segun el parametro obtenido de Nº de pregunta
    switch (this.preguntaNumero) {
      case 1:
        console.log(this.preguntaNumero);
        this.pregunta.loadPregunta(this.pregunta.getPreguntas().preguntas.pregunta1);
        break;

      case 2:
        this.pregunta.loadPregunta(this.pregunta.getPreguntas().preguntas.pregunta2);
        break;

      case 3:
        this.pregunta.loadPregunta(this.pregunta.getPreguntas().preguntas.pregunta3);
        break;

      default:
        this.pregunta.loadPregunta(this.pregunta.getPreguntas().preguntas.pregunta1);
        break;
    }
  }

  next(){
    this.vibrar(500);
    if(this.respuesta == this.pregunta.correcta){
      this.player.triviaWin();
    } else {
      this.player.triviaLose();
    }
    this.navCtrl.push(TriviaPreguntaPage, {jugador: this.player, pregunta: this.preguntaNumero + 1});
  }

  quit(){
    this.navCtrl.popToRoot();
    this.vibrar(1000);
  }

  finish(){
    console.log("Mostramos resumen");
    this.vibrar(1000);
    //this.navCtrl.push(null);
  }

  private vibrar(miliseconds: number){
    this.vibration.vibrate(miliseconds);
  }
}
