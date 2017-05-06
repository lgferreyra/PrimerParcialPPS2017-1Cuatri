import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'; 

import { Jugador } from "../entity/jugador";

/*
  Generated class for the PptService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PptService {

  jugador : Jugador;

  //baseUrl: string = window.location.protocol + "//localhost/parcial/ws/public/";
  baseUrl: string = "http://lgferreyra.esy.es/ppsParcial/ws/public/";
  data: Jugador[];

  constructor(public http: Http) {
    
  }

  getScores(filter: string) : Observable<Jugador[]> {
    return this.http.get(this.baseUrl + "ppt/" + filter)
                    .map(response => response.json() as Jugador[])
                    .catch(this.handleError);
  }

  saveScore(score: Jugador) : Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "ppt/insert/", score, options)
                    .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  setJugador(jugador : Jugador){
    this.jugador = jugador;
  }

  getJugador(): Jugador{
    return this.jugador;
  }
}
