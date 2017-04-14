export class Jugador{

  private nombre: string;
  private win: number=0;
  private lose: number=0;

  constructor(nombre : string){
    this.nombre = nombre;
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

  triviaWin() {
    this.win++;
  }

  triviaLose() {
    this.lose++;
  }

}
