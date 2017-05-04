import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Jugador } from "../../entity/jugador";
import { TriviaService } from "../../providers/triviaService";

/**
 * Generated class for the Scoreboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class Scoreboard {

  scores: Jugador[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: TriviaService, public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Scoreboard');
  }

  ionViewWillEnter() {
    let loading = this.loadCtrl.create({content: 'Cargando...'});
    loading.present();
    this.service.getScores().subscribe(
      scores => {
        console.log(scores);
        this.scores = scores;
      } ,
      error=>{
        console.error(error);
      } ,
      ()=>loading.dismiss()
    );
  }

}
