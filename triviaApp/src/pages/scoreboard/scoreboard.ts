import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: TriviaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Scoreboard');
  }

  ionViewWillEnter() {
    this.service.getScores().subscribe(
      scores => {
        console.log(scores);
        this.scores = scores;
      } ,
      error=>{
        console.error(error);
      }
    );
  }

}
