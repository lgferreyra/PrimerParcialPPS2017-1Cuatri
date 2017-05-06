import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Jugador } from "../../entity/jugador";
import { PptService } from "../../providers/ppt-service";

import { Vibration } from "@ionic-native/vibration";

/**
 * Generated class for the PptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ppt-page',
  templateUrl: 'ppt-page.html',
})
export class PptPage implements OnInit{

  jugador : Jugador;
  eleccionMaquina : string;
  eleccionJugador : string;
  srcMaquina : string;
  resultado : string = null;
  piedraStyle : string = "none";
  papelStyle : string = "none";
  tijeraStyle : string = "none";
  mensaje : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public service : PptService, public vibration : Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PptPage');
  }

  ngOnInit(){
    this.srcMaquina = "img/adivinanza.png";
    if(this.jugador==null){
      this.jugador = this.navParams.get("jugador");
    }

    let numeroSecreto: number = Math.floor( Math.random()*3)+1;
		switch(numeroSecreto)
		{
			case 1:
				this.eleccionMaquina="piedra";
				break;
			case 2:
				this.eleccionMaquina="papel";
				break;
			case 3:
				this.eleccionMaquina="tijera";
				break;

		}

    console.log(this.eleccionMaquina);
    
  }

  resolverJuego(eleccion: string){
    
    if(this.resultado==null){

      this.vibration.vibrate(500);

      this.eleccionJugador = eleccion;

      this.srcMaquina = "img/" + this.eleccionMaquina + "_right.jpg";

      switch (this.eleccionJugador) {

          case "piedra":

            this.papelStyle = "opacity";
            this.tijeraStyle = "opacity";

            if(this.eleccionMaquina=="tijera"){
              this.ganar();
            } else if(this.eleccionMaquina=="papel") {
              this.perder();
            } else {
              this.empatar();
            }
          break;

          case "papel":

            this.piedraStyle = "opacity";
            this.tijeraStyle = "opacity";

            if(this.eleccionMaquina=="piedra"){
              this.ganar();
            } else if(this.eleccionMaquina=="tijera") {
              this.perder();
            } else {
              this.empatar();
            }
          break;

          case "tijera":

            this.piedraStyle = "opacity";
            this.papelStyle = "opacity";

            if(this.eleccionMaquina=="papel"){
              this.ganar();
            } else if(this.eleccionMaquina=="piedra") {
              this.perder();
            } else {
              this.empatar();
            }
          break;
      
      }
    }

  }

  ganar(){
    this.jugador.triviaWin();
    console.log("ganaste");
    console.log(this.jugador);
    this.resultado = "W";
    this.mensaje = "Has ganado";
  }

  perder(){
    this.jugador.triviaLose();
    console.log("perdiste");
    console.log(this.jugador);
    this.resultado = "L";
    this.mensaje = "Has perdido";
  }

  empatar(){
    this.jugador.triviaTie();
    console.log("empataste");
    console.log(this.jugador);
    this.resultado = "T";
    this.mensaje = "Has empatado";
  }

  saveResult(){
    let loading = this.loadCtrl.create({content: 'Cargando...'});
    loading.present();
    this.service.saveScore(this.jugador).subscribe(
      response=>{
        console.log(response);
        this.navCtrl.pop();
      }
      , error=>console.error(error)
      , ()=>loading.dismiss()
    );
  }
}
