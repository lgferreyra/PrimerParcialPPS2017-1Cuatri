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
    console.log("Correcto!");
    this.win++;
  }

  triviaLose() {
    console.log("Dedicate a otra cosa");
    this.lose++;
  }

}
