export class Jugador{

  private id : number;
  private nombre: string;
  private win: number=0;
  private lose: number=0;
  private lastRespuestas: string[] = [];

  constructor(nombre : string, win?: number, lose?: number){
    this.nombre = nombre;
    if(win!=null){
      this.win = win;
      this.lose = lose;
    }
  }
  

  getName() : string{
    return this.nombre;
  }

  getWins() : number {
    return this.win;
  }

  getLose() : number {
    return this.lose;
  }

  getLastRespuestas() : string[]{
    return this.lastRespuestas;
  }

  triviaWin() {
    this.win++;
  }

  triviaLose() {
    this.lose++;
  }

  setId(id: number):void{
    this.id = id;
  }

  addRespuesta(respuesta: string){
    console.log(respuesta);
    this.lastRespuestas.push(respuesta);
    console.log(this.lastRespuestas);
  }
}
