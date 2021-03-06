import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Jugador } from "../../entity/jugador";
import { Pregunta } from "../../entity/pregunta";
import { TriviaService } from "../../providers/triviaService";

import { Vibration } from "@ionic-native/vibration";

import { Resumen } from "../resumen/resumen";

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
  respuestas : string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public vibration: Vibration, public service: TriviaService, public loadCtrl: LoadingController) {

  }

  ngOnInit(){
    
    this.player = this.navParams.get("jugador");
    this.preguntaNumero = this.navParams.get("pregunta");
    
    //Elijo la pregunta segun el parametro obtenido de Nº de pregunta
    switch (this.preguntaNumero) {
      case 1:
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

    //console.log(this.pregunta);
  }

  next(){
    this.vibrar(500);
    this.resolveTrivia();
    this.saveRespuesta();
    this.navCtrl.push(TriviaPreguntaPage, {jugador: this.player, pregunta: this.preguntaNumero + 1});
  }

  quit(){
    this.navCtrl.popToRoot();
    this.vibrar(1000);
  }

  finish(){
    this.vibrar(1000);
    this.resolveTrivia();
    this.saveRespuesta();
    let loading = this.loadCtrl.create({content: 'Cargando...'});
    loading.present();
    this.service.saveScore(this.player).subscribe(
      response=>{
        console.log(response);
        this.navCtrl.push(Resumen, {jugador: this.player});
      }
      , error=>console.error(error)
      , ()=>loading.dismiss()
    );

  }

  private vibrar(miliseconds: number){
    this.vibration.vibrate(miliseconds);
  }

  resolveTrivia(){
    if(this.respuesta == this.pregunta.correcta){
      this.player.triviaWin();
    } else {
      this.player.triviaLose();
    }
  }

  saveRespuesta(){
    switch (Number.parseInt(this.respuesta.toString())) {
      case 1:
        this.player.addRespuesta(this.pregunta.opcion1);
        break;

      case 2:
        this.player.addRespuesta(this.pregunta.opcion2);
        break;

      case 3:
        this.player.addRespuesta(this.pregunta.opcion3);
        break;
    
      default:
        break;
    }
  }
}
