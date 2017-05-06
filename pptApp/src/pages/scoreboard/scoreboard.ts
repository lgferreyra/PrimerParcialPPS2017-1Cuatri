import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Jugador } from "../../entity/jugador";
import { PptService } from "../../providers/ppt-service";

/**
 * Generated class for the Scoreboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html'
})
export class Scoreboard implements OnInit {

  scores: Jugador[] = [];
  filter: string;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PptService, public loadCtrl: LoadingController) {
  }

  ngOnInit(){
    this.filter = this.navParams.get("filter");
    if(this.filter=="W"){
      this.title ="Últimas ganadas";
    } else if(this.filter=="L") {
      this.title ="Últimas perdidas";
    } else {
      this.title ="Últimas empatadas";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Scoreboard');
  }

  ionViewWillEnter() {
    let loading = this.loadCtrl.create({content: 'Cargando...'});
    loading.present();
    this.service.getScores(this.filter).subscribe(
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
